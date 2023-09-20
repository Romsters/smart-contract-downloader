import axios from 'axios';
import { networks } from "../config";

const fetchContractInfo = async (networkName: string, address: string) => {
  const { url, mapper } = networks[networkName];
  try {
    const response = await axios.get(`${url}/${address}`);
    const { data } = response;
    return mapper.mapContractInfo(data);
  } catch (error) {
    console.error(`Failed to fetch contract info`, error);
    return null;
  }
}

export default {
  fetchContractInfo
}
