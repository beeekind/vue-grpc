import {grpc, BrowserHeaders} from "grpc-web-client";
import {NoteService} from "./_proto/notes_service_pb_service";

//
import {Note, GetNotesRequest, GetNotesResponse, AddNoteRequest, DeleteNoteRequest} from "./_proto/notes_service_pb";

import { Component } from 'vue-typed'
import * as Vue from 'vue'

const template = require('./app.jade')();

@Component({
	template
})
class App extends Vue {
    host = 'http://localhost:9090';
    notes: Array<Note> = [];
    body: '';
    author: '';

    mounted(){
        this.getNotes();
    }

    getNotes(){
	    const request = new GetNotesRequest();

	    grpc.invoke(NoteService.GetNotes, {
            host: this.host,
	        request: request,

            onMessage: (notes: GetNotesResponse) => {
                this.notes = notes.getNotesList();
                console.log("Successfully queried, ", notes);
            },

            onEnd(code: grpc.Code, message: string, trailers: BrowserHeaders){
                console.log(code, message)
            }
        })
    }

    addNote(){
        if (!this.author || !this.body){
            alert("Please populate the author and body field!");
        }

        const request = new AddNoteRequest();
        request.setAuthor(this.author);
        request.setBody(this.body);

        grpc.invoke(NoteService.AddNote, {
            host: this.host,
            request: request,

            onMessage: (note: Note) => {
                this.notes.push(note);
                console.log("Successfully added, ", note);
            },

            onEnd(code: grpc.Code, message: string, trailers: BrowserHeaders){
                console.log(code, message, trailers);
            }
        })
    }

    deleteNote(id){
        const request = new DeleteNoteRequest();
        request.setId(id);

        grpc.invoke(NoteService.DeleteNote, {
            host: this.host,
            request: request,

            onMessage: (note: Note) => {
                let noteIndex = this.notes.indexOf(note);
                if (noteIndex !== -1) delete this.notes[noteIndex];
                console.log("Successfully deleted, ", note);
            },

            onEnd(code: grpc.Code, message: string, trailers: BrowserHeaders){
                console.log(code, message, trailers);
            }
        })
    }
}

new App().$mount('#app');