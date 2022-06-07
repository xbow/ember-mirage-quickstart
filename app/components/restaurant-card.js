import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class RestaurantCardComponent extends Component {
  @action openAddressModal(restaurant) {
    alert(`open address modal for restaurant ${restaurant.id}`);
  }
}
