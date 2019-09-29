import { EventEmitter } from "events";
import { Dispatcher } from "../appDispatcher";
import { actionTypes } from "../actions/actionTypes";

const CHNAGE_EVENT = "change";
let _courses = [];

class CourseStore extends EventEmitter {
  addChangeListner(callback) {
    this.on(CHNAGE_EVENT, callback);
  }

  removeChangeListner(callback) {
    this.removeChangeListner(CHNAGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHNAGE_EVENT);
  }

  getCourses() {
    return _courses;
  }

  getCoursesBySlug(slug) {
    _courses.find(x => x.slug === slug);
  }
}

const courseStore = new CourseStore();

Dispatcher.register(action => {
  switch (action.actionType) {
    case actionTypes.CREATE_COURSE:
      _courses.push(action.course);
      courseStore.emitChange();
      break;

    default:
      break;
  }
});

export default courseStore;
