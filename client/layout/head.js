Meteor.startup(function() {
  if (Meteor.isClient) {
    return SEO.config({
      title: 'Coffee@CU',
      meta: {
        'description': 'Grab coffee with Columbia students. Make friends, get mentors, help underclassmen in the Columbia community.'
      },
      og: {
        'title': 'Coffee@CU'
      }
    });
  }
});
