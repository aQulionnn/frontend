import axios from "axios"

export const getAllAccessories = async () => {
  const { data } = await axios.get('https://localhost:7079/api/Accessory/all')
  return data
}

export const getAccessoryById = async (id) => {
  const { data } = await axios.get('https://localhost:7079/api/Accessory/' + id)
  return data
}

export const createAccessory = async (accessory) => {
  const { data } = await axios.post('https://localhost:7079/api/Accessory', accessory)
  return data
}

export const updateAccessory = async (accessory) => {
  const { data } = await axios.put('https://localhost:7079/api/Accessory/' + accessory.id, accessory)
  return data
}

export const deleteAccessory = async (id) => {
  const { data } = await axios.delete('https://localhost:7079/api/Accessory/' + id)
  return data
}