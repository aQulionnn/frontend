import React, { useState } from 'react'
import style from './Key.module.css'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';


function Key() {

  const [newKey, setNewKey] = useState({
    name: '',
    type: '',
    price: 0,
    image: null
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setNewKey({
        ...newKey,
        image: files[0]
      });
    } else {
      setNewKey({
        ...newKey,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload the image first
    let imageFileName = '';
    if (newKey.image) {
      const formData = new FormData();
      formData.append('file', newKey.image);
      
      try {
        const uploadResponse = await axios.post('https://localhost:7079/api/Image', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        imageFileName = uploadResponse.data.fileName;
      } catch (error) {
        console.error('Error uploading image', error);
        return;
      }
    }

    // Create the key
    const keyData = {
      name: newKey.name,
      type: newKey.type,
      price: parseInt(newKey.price),
      image: imageFileName
    };

    try {
      const response = await axios.post('https://localhost:7079/api/Key', keyData);
      console.log('Key created successfully', response.data);
      toast.success('Создано')
    } catch (error) {
      console.error('Error creating key', error);
      toast.error('Ошибка')
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style['form']}>
      <h3>Ключ</h3>
      <input type="text" name='name' placeholder='Название' onChange={handleChange} />
      <input type="text" name='type' placeholder='Вид' onChange={handleChange} />
      <input type="text" name='price' placeholder='Цена' onChange={handleChange} />
      <input type="file" name='image' onChange={handleChange} />
      <button type='submit'>Создать</button>
      <Toaster />
    </form>
  )
}

export default Key