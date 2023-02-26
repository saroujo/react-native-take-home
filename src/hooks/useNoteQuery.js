import { useCallback, useMemo, useState } from 'react';
import NotesApi from '../apis/NotesApi';

const useNoteQuery = () => {
  const notesApi = useMemo(() => new NotesApi(), []);
  const [_note, setNote] = useState(null);
  const [inFlight, setInFlight] = useState(false);
  const [error, setError] = useState(null);

  const getNote = useCallback(
    async noteId => {
      setInFlight(true);
      const res = await notesApi.getNote(noteId);
      if (!res.success) {
        // Handle error
        console.error('listNotes() api error:', res.message);
        setError(res.message);
        return;
      }
      setNote(res.data);
      setInFlight(false);
    },
    [notesApi],
  );

  const createNote = useCallback(
    async note => {
      if (!note || !note?.title || !note?.body) {
        setError('Note missing');
        return;
      }
      setInFlight(true);
      const res = await notesApi.createNote(note);
      if (!res.success) {
        // Handle error
        console.error('createNote() api error:', res.message);
        setError(res.message);
        return;
      }
      setInFlight(false);
    },
    [notesApi],
  );

  const updateNote = useCallback(
    async (noteId, note) => {
      if (!note || !noteId || !note?.title || !note?.body) {
        setError('Note missing');
        return;
      }
      setInFlight(true);
      const res = await notesApi.updateNote(noteId, note);
      if (!res.success) {
        // Handle error
        console.error('updateNote() api error:', res.message);
        setError(res.message);
        return;
      }
      setInFlight(false);
    },
    [notesApi],
  );

  const deleteNote = useCallback(
    async noteId => {
      if (!noteId) {
        setError('Note missing');
        return;
      }
      setInFlight(true);
      const res = await notesApi.deleteNote(noteId);
      if (!res.success) {
        // Handle error
        console.error('updateNote() api error:', res.message);
        setError(res.message);
        return;
      }
      setInFlight(false);
    },
    [notesApi],
  );

  return {
    getNote,
    createNote,
    updateNote,
    inFlight,
    error,
    note: _note,
    deleteNote,
  };
};

export default useNoteQuery;
