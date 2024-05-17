import React, { useState } from 'react'
import style from './Accessory.module.css'
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function Accessory() {

  const [newAccessory, setNewAccessory] = useState({
    name: '',
    price: 0,
    image: null
  })

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setNewAccessory({
        ...newAccessory,
        image: files[0]
      });
    } else {
      setNewAccessory({
        ...newAccessory,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Upload the image first
    let imageFileName = '';
    if (newAccessory.image) {
      const formData = new FormData();
      formData.append('file', newAccessory.image);
      
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
    const accessoryData = {
      name: newAccessory.name,
      price: parseInt(newAccessory.price),
      image: imageFileName
    };

    try {
      const response = await axios.post('https://localhost:7079/api/Accessory', accessoryData);
      console.log('Key created successfully', response.data);
      toast.success('Создано')
    } catch (error) {
      console.error('Error creating key', error);
      toast.error('Ошибка')
    }
  };

  return (
    <form onSubmit={handleSubmit} className={style['form']}>
      <h3>Аксессуар</h3>
      <input type="text" name='name' placeholder='Название' onChange={handleChange} />
      <input type="text" name='price' placeholder='Цена' onChange={handleChange} />
      <input type="file" name='image' onChange={handleChange} />
      <button type='submit'>Создать</button>
      <Toaster />
    </form>
  )
}

export default Accessory