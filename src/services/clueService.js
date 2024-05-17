import axios from "axios";

export const getAllKeys = async () => {
  const { data } = await axios.get('https://localhost:7079/api/Key/all')
  return data
}

export const getKeyById = async (id) => {
  const { data } = await axios.get('https://localhost:7079/api/Key/' + id)
  return data
}

export const createKey = async (key) => {
  const { data } = await axios.post('https://localhost:7079/api/Key', key)
  return data
}

export const updateKey = async (key) => {
  const { data } = await axios.put('https://localhost:7079/api/Key/' + key.id, key)
  return data
}

export const deleteKey = async (id) => {
  const { data } = await axios.delete('https://localhost:7079/api/Key/' + id)
  return data
}