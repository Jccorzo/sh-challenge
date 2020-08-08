import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useCallback } from 'react';
import Head from './Components/head/Head';
import Hanger from './Components/hanger/Hanger';


function App() {
  // using useCallback is optional
  const onBeforeCapture = useCallback(() => {
    /*...*/
  }, []);
  const onBeforeDragStart = useCallback(() => {
    /*...*/
  }, []);
  const onDragStart = useCallback(() => {
    /*...*/
  }, []);
  const onDragUpdate = useCallback(() => {
    /*...*/
  }, []);
  const onDragEnd = useCallback(() => {
    // the only one that is required
  }, []);

  return (
    <DragDropContext
      onBeforeCapture={onBeforeCapture}
      onBeforeDragStart={onBeforeDragStart}
      onDragStart={onDragStart}
      onDragUpdate={onDragUpdate}
      onDragEnd={onDragEnd}
    >
      <div>Hello world</div>
      <Hanger>
        <Head/>
      </Hanger>
    </DragDropContext>
  );
}

export default App;
