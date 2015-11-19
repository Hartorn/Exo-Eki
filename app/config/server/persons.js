import builder from 'focus-core/util/url/builder';

const personRoot = API_ROOT + '/persons/';

export default {
    loadPerson: builder(personRoot + '${id}', 'GET'),
    loadPersonMovies: builder(personRoot + '${id}/movies', 'GET'),
    savePerson: builder(personRoot + '${id}', 'PUT')
};
