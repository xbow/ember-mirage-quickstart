import Controller from '@ember/controller';
// import { tracked } from '@glimmer/tracking';

export default class CompareController extends Controller {
  // @tracked enableShowMoreButton;

  queryParams = ['amount'];

  amount = 5;

  enableShowMoreButton = true;

  // get enableShowMoreButton() {
  //  return this.model.length < 6;
  // }
}
