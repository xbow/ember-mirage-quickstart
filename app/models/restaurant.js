import Model, { attr } from '@ember-data/model';

export default class RestaurantModel extends Model {
  @attr('string') name;

  @attr('number') rating;

  @attr('string') street;

  @attr('string') zip;

  @attr('string') city;

  @attr('string') website;

  @attr('boolean') burger_classic;

  @attr('boolean') burger_cheese;

  @attr('boolean') burger_bio;
}
