import * as axios from 'axios';

const instans = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    'API-KEY': 'e0f4949a-74c0-4a6e-9dba-20030a4d46fd',
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instans
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  follow(userId) {
    return instans.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instans.delete(`follow/${userId}`);
  },
  getProfile(userId) {
    return instans.get(`profile/${userId}`).then((response) => response.data);
  },
};

export const authAPI = {
  me() {
    return instans.get('auth/me');
  },
};
