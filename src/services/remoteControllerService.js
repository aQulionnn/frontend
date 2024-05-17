import axios from "axios";

export const getAllRemoteControllers = async () => {
  const { data } = await axios.get('https://localhost:7079/api/RemoteControllerUnit/all')
  return data
}

export const getRemoteControllerById = async (id) => {
  const { data } = await axios.get('https://localhost:7079/api/RemoteControllerUnit/' + id)
  return data
}

export const creategetRemoteController = async (rcu) => {
  const { data } = await axios.post('https://localhost:7079/api/RemoteControllerUnit', rcu)
  return data
}

export const updategetRemoteController = async (rcu) => {
  const { data } = await axios.put('https://localhost:7079/api/RemoteControllerUnit/' + rcu.id, rcu)
  return data
}

export const deletegetRemoteController = async (id) => {
  const { data } = await axios.delete('https://localhost:7079/api/RemoteControllerUnit/' + id)
  return data
}