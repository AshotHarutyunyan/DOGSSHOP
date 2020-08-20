import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://dog.ceo/api/',
});


export const DOGSAPI = {
    getRandomImages(qty) {
        return instance.get(`breeds/image/random/${qty}`).then(response => {
            return response.data;
        });
    },
    getBreedsList() {
        return instance.get(`breeds/list/all`).then(response => {
            return response.data;
        });
    },
    getByBreed(breed,qty) {
        return instance.get(`breed/${breed}/images/random/${qty}`).then(response => {
            return response.data;
        });
    },
    getBySubBreed(breed,subbreed,qty) {
        return instance.get(`breed/${breed}/${subbreed}/images/random/${qty}`).then(response => {
            return response.data;
        });
    }
};
