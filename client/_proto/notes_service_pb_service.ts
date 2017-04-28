// package: notes
// file: notes_service.proto

import * as notes_service_pb from "./notes_service_pb";
export class NoteService {
  static serviceName = "notes.NoteService";
}
export namespace NoteService {
  export class AddNote {
    static methodName = "AddNote";
    static service = NoteService;
    static requestStream = false;
    static responseStream = false;
    static requestType = notes_service_pb.AddNoteRequest;
    static responseType = notes_service_pb.Note;
  }
  export class GetNotes {
    static methodName = "GetNotes";
    static service = NoteService;
    static requestStream = false;
    static responseStream = false;
    static requestType = notes_service_pb.GetNotesRequest;
    static responseType = notes_service_pb.GetNotesResponse;
  }
  export class DeleteNote {
    static methodName = "DeleteNote";
    static service = NoteService;
    static requestStream = false;
    static responseStream = false;
    static requestType = notes_service_pb.DeleteNoteRequest;
    static responseType = notes_service_pb.Note;
  }
}
