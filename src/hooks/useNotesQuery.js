import { useCallback, useEffect, useMemo, useState } from 'react';
import NotesApi from '../apis/NotesApi';

const useNotesQuery = () => {
  const notesApi = useMemo(() => new NotesApi(), []);

  const [notesListLoading, setNotesListLoading] = useState(true);
  const [notesList, setNotesList] = useState([]);

  const queryNotes = useCallback(async () => {
    setNotesListLoading(true);
    const res = await notesApi.listNotes();
    if (!res.success) {
      // Handle error
      console.error('listNotes() api error:', res.message);
      return;
    }

    setNotesList(res.data);
    setNotesListLoading(false);
  }, [notesApi]);

  // Initilize with querying for data
  useEffect(() => {
    queryNotes();
  }, [queryNotes]);

  return {
    notesListLoading,
    notesList,
    queryNotes,
  };
};

export default useNotesQuery;
