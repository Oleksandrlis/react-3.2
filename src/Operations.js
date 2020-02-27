import axios from 'axios'
 

export const getData = (value, pageNumber=1) => {
   return axios.get(`https://pixabay.com/api/?key=15290767-65b364869064885930c2d0935&q=${value}&image_type=photo 
   https://pixabay.com/api/?q=${value}&page=${pageNumber}&key=15290767-65b364869064885930c2d0935&image_type=photo&orientation=horizontal&per_page=12`)
    .then(response => response.data.hits);
}
