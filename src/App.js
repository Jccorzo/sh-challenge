import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { useCallback } from 'react';
import Head from './Components/head/Head';
import Hanger from './Components/hanger/Hanger';
import Torso from './Components/torso/Torso';
import InstructionBox from './Components/instrucion-box/InstructionBox';
import Chest from './Components/chest/Chest';
import RightArm from './Components/right-arm/RightArm';
import LeftArm from './Components/left-arm/LeftArm';


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
      <Hanger>
        <InstructionBox/>
        <Torso/>
        <Chest/>
        <Head/>
        <RightArm/>
        <LeftArm/>
      </Hanger>
    </DragDropContext>
  );
}

export default App;
