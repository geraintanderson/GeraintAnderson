(function(){

  var app = angular.module('notesApp', []);
  app.controller('NotesController', function($scope){

    $scope.notes = notes;
    $scope.noteIndex = 0;
    $scope.activeNote = angular.copy($scope.notes[$scope.noteIndex]);

    $scope.onSave = function(){
      $scope.notes[$scope.noteIndex] = angular.copy($scope.activeNote);
    };

    $scope.onClear = function(){
      $scope.activeNote.text = "";
    };

    $scope.deleteNote = function(){
      $scope.notes.splice($scope.noteIndex, 1);
    };

    $scope.newNote = function(){
      // note Indexes are not reused so must incrament even if notes have been deleted
      var newNoteId = $scope.notes[$scope.notes.length - 1 ].id + 1;
      // Note is added and the position in the array is stored and used to set the new note as the active one
      var newPos = $scope.notes.push({id:newNoteId, text:'New Note'}) - 1;
      $scope.setNote(newPos);
    };

    $scope.setNote = function(noteIndex){
      $scope.noteIndex = noteIndex;
      $scope.activeNote = angular.copy($scope.notes[noteIndex]);
    };

  });


  var note1 = {
    id: 0,
    text: "Note0",
  };
  var note2 = {
    id: 1,
    text: "Note1",
  };
  var note3 = {
    id: 2,
    text: "Note2",
  };

  var notes = [note1, note2, note3];
}());
