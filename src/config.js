// src/config.js

const config = {
    GET_TASKS_API_BASE_URL: process.env.REACT_APP_GET_TASKS_API_BASE_URL || 'http://gettask.devopsinsight.biz',
    DELETE_TASK_API_BASE_URL: process.env.REACT_APP_DELETE_TASK_API_BASE_URL || 'http://deletetask.devopsinsight.biz',
    CREATE_TASK_API_BASE_URL: process.env.REACT_APP_CREATE_TASK_API_BASE_URL || 'http://addtask.devopsinsight.biz',
  };
  
  export default config;
  