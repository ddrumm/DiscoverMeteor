var postsData = [
  {
    title: "introducing Telescope",
    author: "Sacha Greif",
    url: "http://sachagrief.com/introducing-telescope/"
  },
  {
    title: "Meteor",
    author: "Tom Coleman",
    url: "http://meteor.com"
  },
  {
    title: 'The Meteor Book',
    author: 'Tom Coleman',
    url: 'http://themeteorbook.com'
  }
];

Template.postsList.helpers({
  posts: postsData
});

Template.postItem.helpers({
  domain: function() {
    var a = document.createElement('a');
    a.href = this.url;
    return a.hostname;
  }
});