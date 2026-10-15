import React, { useState } from 'react';
import { CheckCircle2, Circle } from 'lucide-react';

const initialTasks = [
  { id: 1, title: 'متابعة عرض القيمة', time: '10:15 ص', done: true },
  { id: 2, title: 'اعتماد ميزانية الحملة', time: '12:00 م', done: false },
  { id: 3, title: 'مراجعة تقرير المبيعات', time: '02:30 م', done: false },
  { id: 4, title: 'متابعة تحصيل الدفعات', time: '04:00 م', done: false },
];

export default function TasksWidget() {
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  return (
    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold text-gray-800">مهام اليوم</h3>
        <span className="text-xs bg-amber-50 text-amber-700 px-2 py-0.5 rounded font-bold">5 مهام</span>
      </div>

      <div className="space-y-2.5">
        {tasks.map(task => (
          <div 
            key={task.id} 
            onClick={() => toggleTask(task.id)}
            className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 cursor-pointer border border-transparent hover:border-gray-100 transition"
          >
            <div className="flex items-center gap-2.5">
              {task.done ? (
                <CheckCircle2 size={16} className="text-emerald-500" />
              ) : (
                <Circle size={16} className="text-gray-300" />
              )}
              <span className={`text-xs ${task.done ? 'line-through text-gray-400' : 'text-gray-700 font-medium'}`}>
                {task.title}
              </span>
            </div>
            <span className="text-[10px] text-gray-400">{task.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}