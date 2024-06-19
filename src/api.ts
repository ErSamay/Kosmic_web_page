import { apiClient } from "./apiClient";
import log from "loglevel";

export async function fetchLeads(email: string) {
  try {
    const response = await apiClient.post(`/leads?email=${email}`);
    if (response.status === 200) {
      log.info("Data fetched successfully:", response.data);
      return response.data;
    } else {
      log.error(`Failed to fetch data: HTTP status ${response.status}`);
      throw new Error(`Failed to fetch data: HTTP status ${response.status}`);
    }
  } catch (error) {
    log.error("Error fetching data:", error);
    throw error; 
  }
}
