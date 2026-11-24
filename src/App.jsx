import { useRef, useState } from 'react';
import {
  GanttComponent,
  Inject,
  Selection,
  ColumnsDirective,
  ColumnDirective,
  DomVirtualization
} from '@syncfusion/ej2-react-gantt';
import { generateVirtualData } from './data';
import './App.css';

const recordOptions = [5000, 10000, 25000];
const initialTasks = generateVirtualData(recordOptions[0]);

const taskFields = {
  id: 'TaskID',
  name: 'TaskName',
  startDate: 'StartDate',
  endDate: 'EndDate',
  duration: 'Duration',
  progress: 'Progress',
  parentID: 'parentID',
  dependency: 'Dependency'
};
const splitterSettings = {
  columnIndex: 2
};
const labelSettings = {
  taskLabel: 'Progress'
};

function App() {
  const ganttRef = useRef(null);
  const [recordCount, setRecordCount] = useState(recordOptions[0]);

  const renderRecords = (count) => {
    const updatedTasks = generateVirtualData(count);
    ganttRef.current.dataSource = updatedTasks;
    ganttRef.current.refresh();
    setRecordCount(count);
  };

  return (
    <main className="app-shell">
      <header className="page-header">
        <div>
          <p className="eyebrow">DOM Virtualization</p>
          <h1>Gantt chart</h1>
          <p className="page-description">
            Choose a dataset size to render in the chart.
          </p>
        </div>
        <div className="record-controls" role="group" aria-label="Dataset size">
          {recordOptions.map((count) => (
            <button
              className={`record-button${recordCount === count ? ' is-active' : ''}`}
              type="button"
              key={count}
              aria-pressed={recordCount === count}
              onClick={() => renderRecords(count)}
            >
              {count / 1000}K records
            </button>
          ))}
        </div>
      </header>

      <section className="chart-panel" aria-label="Project schedule">
        <div className="chart-toolbar" aria-live="polite">
          <span className="chart-label">Project schedule</span>
          <span className="record-count">
            {recordCount.toLocaleString()} records
          </span>
        </div>
        <GanttComponent
          ref={ganttRef}
          id="VirtualScroll"
          dataSource={initialTasks}
          treeColumnIndex={1}
          labelSettings={labelSettings}
          allowSelection={true}
          highlightWeekends={true}
          enableDomVirtualization={true}
          taskFields={taskFields}
          splitterSettings={splitterSettings}
          height="650px"
          taskbarHeight={25}
          rowHeight={46}
        >
          <ColumnsDirective>
            <ColumnDirective field="TaskID" />
            <ColumnDirective field="TaskName" headerText="Task Name" width={300} />
            <ColumnDirective field="StartDate" />
            <ColumnDirective field="Duration" />
            <ColumnDirective field="Progress" />
            <ColumnDirective field="Dependency" headerText="Predecessor" width={130} />
          </ColumnsDirective>
          <Inject services={[Selection,DomVirtualization]} />
        </GanttComponent>
      </section>
    </main>
  );
}

export default App;
