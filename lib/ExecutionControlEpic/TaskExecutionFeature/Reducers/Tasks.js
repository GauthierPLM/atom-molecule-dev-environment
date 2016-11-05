'use babel'
// @flow
import type {Task} from "../Types/types.js.flow";
import {areSameTargets} from "../../TargetConfigurationFeature/Model/TargetManipulators";
import { fromJS, is } from "immutable";

export default function(state: TasksReducer = [], action: any): TasksReducer {
  switch(action.type) {
    case "ADD_TASK":
      return fromJS(state)
              .push(action.payload.task)
              .toJS();
    case "START_TASK":
      return fromJS(state)
              .map(task => task.get('id') == action.payload.id ?
                    task.update(t => t.get('state') == "created" ?
                      t.set('state', "running")
                       .set('end', action.payload.date)
                     : t) : task
              )
              .toJS();
    case "STOP_TASK":
      return fromJS(state)
              .map(task => task.get('id') == action.payload.id ?
                    task.update(t => t.get('state') == "running" ?
                      t.set('state', "stopped")
                       .set('end', action.payload.date)
                     : t) : task
              )
              .toJS();
    case "STOP_TASK_OF_TARGET":
      return fromJS(state)
              .map(task => areSameTargets(task.get('target').toJS(),  action.payload.target) ?
                    task.update(t => t.get('state') == "running" ?
                      t.set('state', "stopped")
                       .set('end', action.payload.date)
                     : t) : task
              )
              .toJS();
    case "CRASH_TASK":
      return fromJS(state)
              .map(task => task.get('id') == action.payload.id ?
                    task.update(t => t.get('state') == "running" ?
                      t.set('state', "crashed")
                       .set('end', action.payload.date)
                     : t) : task
              )
              .toJS();
    case "FAIL_TASK":
      return fromJS(state)
              .map(task => task.get('id') == action.payload.id ?
                    task.update(t => t.get('state') == "running" ?
                      t.set('state', "failed")
                       .set('end', action.payload.date)
                     : t) : task
              )
              .toJS();
    case "SUCCEED_TASK":
      return fromJS(state)
              .map(task => task.get('id') == action.payload.id ?
                    task.update(t => t.get('state') == "running" ?
                      t.set('state', "succeed")
                       .set('end', action.payload.date)
                     : t) : task
              )
              .toJS();
    default:
      return state;
  }
}

export type TasksReducer = Array<Task>;