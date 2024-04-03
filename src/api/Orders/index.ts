import { OrderStatusList} from "../../types/types";




export const useAdminOrderList = ({ archived = false }) => {
    const statuses = archived ? [OrderStatusList[3]] : [OrderStatusList[0], OrderStatusList[1], OrderStatusList[2]];
  
  };
  
  export const useInsertOrder = () => {
    
  };