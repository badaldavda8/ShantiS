Template.search.onCreated(function(){
var self =this;
self.autorun(function(){
  self.subscribe('partyMasterDetails');
});
});

Template.search.helpers({
  partyIndex: () => PartyMasterIndex
});