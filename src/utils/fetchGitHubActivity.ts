import axios from 'axios';

const username = 'IslamAsankojoev';
const token = 'your_github_token'; // Замените на свой токен

export const fetchGitHubActivity = async () => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}/events`, {
    });

    // Обработка полученных данных
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub activity:', error);
    return [];
  }
};
