import { Weather } from '../../weather';

export const dummyWeather: Weather = {
    weather: [
        {
            main: 'Clear',
            icon: '01d'
        }
    ],
    main: {
        temp: 25,
        pressure: 1013,
        humidity: 50
    },
    wind: {
        speed: 10
    },
    sys: {
        country: 'US'
    },
    name: 'New York'
};
