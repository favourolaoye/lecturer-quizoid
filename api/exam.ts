// import axios, { AxiosResponse } from 'axios';
import Cookies from 'js-cookie';
import axios from 'axios';
const API_URL = 'https://v2-1o3a.onrender.com/api/mcq';

interface ExamData {
    instruction: string;
    questions: any[];
}

export const createExam = async (examData: ExamData) => {
    try {
        const token = Cookies.get('token');
        const response = await axios.post(API_URL, examData, {
            headers: { 'x-auth-token': token as string },
        });
        return response.data;
    } catch (error: any) {
        throw error.response.data;
    }
};

export const getExams = async () => {
    try {
        const token = Cookies.get('token');
        const response = await axios.get(API_URL, {
            headers: { 'x-auth-token': token as string },
        });
        return response.data;
    } catch (error: any) {
        throw error.response.data;
    }
};

export const getExamById = async (id: string) => {
    try {
        const token = Cookies.get('token');
        const response = await axios.get(`${API_URL}/${id}`, {
            headers: { 'x-auth-token': token as string },
        });
        return response.data;
    } catch (error: any) {
        throw error.response.data;
    }
};

export const updateExam = async (id: string, examData: ExamData) => {
    try {
        const token = Cookies.get('token');
        const response = await axios.put(`${API_URL}/${id}`, examData, {
            headers: { 'x-auth-token': token as string },
        });
        return response.data;
    } catch (error: any) {
        throw error.response.data;
    }
};

export const deleteExam = async (courseCode: string) => {
    try {
        const token = Cookies.get('token');
        const response = await axios.delete(`${API_URL}/delete-exam/${courseCode}`, {
            headers: { 'x-auth-token': token as string },
        });
        return response.data;
    } catch (error: any) {
        throw new Error('Failed to delete exam');
    }
};

export const checkExam = async (courseCode: string) => {
    try {
        const token = Cookies.get('token');
        const response = await axios.get(`${API_URL}/check/${courseCode}`, {
            headers: { 'x-auth-token': token as string },
        });
        return response.data;
    } catch (error: any) {
        throw error.response.data;
    }
};
