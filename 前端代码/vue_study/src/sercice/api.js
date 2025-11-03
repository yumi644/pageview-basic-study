import axios from 'axios';
export const getLogHistory = () => {
    return axios.get("http://localhost:9901/kang/dbQuery?table=datacenter.data_log_compare",{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
        },
    });
}
