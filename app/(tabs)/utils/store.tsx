import create from 'zustand';

const API_URL = "http://dummy-chat-server.tribechat.pro/api/"

export const fetchData = async (uri: string) => {
    try {
        const response = await fetch(`${API_URL}`+ uri);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};
