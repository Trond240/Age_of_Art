import BirthdayCard from './BirthdayCard.vue';
import { shallowMount } from '@vue/test-utils'

let wrapper;

describe('BirthdayCard',() => {

  beforeEach(() => {
      wrapper = shallowMount(BirthdayCard, {
          propsData: {
              birthdayCard: {
                      date:"1995-11-10",
                      explanation:"There are many things about lightning that are not understood.  Lightning has been seen in the atmospheres of Venus, Earth, Jupiter, and Saturn. A leading theory is that collisions of particles in clouds cause large areas of positive and negative charge. When large oppositely charged areas get close enough together, electrons and/or ions race between them and create a path where more charged particles can follow - lightning.  On average, over 100 lightning strikes occur every second over the surface of the Earth. Here lightning strikes near a Space Shuttle before launch.  Lightning can be extremely dangerous - stay out of open areas during thunderstorms.",
                      hdurl:"https://apod.nasa.gov/apod/image/shuttle_lightning_big.gif",
                      media_type:"image",
                      service_version:"v1",
                      title:"Tomorrow's picture:",
                      url:"https://apod.nasa.gov/apod/image/shuttle_lightning.gif"
                  }
      }
      })
  });

  afterEach(() => {
      wrapper.destroy();
  })

    it('should render the birthdayCard', () => {
      expect(wrapper.exists()).toBe(true)
    });

    it('should render the card div', () => {
      expect(wrapper.classes()).toContain('birthday-card')
    });

    it('should render the description', () => {
      expect(wrapper.text()).toContain("There are many things about lightning that are not understood.  Lightning has been seen in the atmospheres of Venus, Earth, Jupiter, and Saturn. A leading theory is that collisions of particles in clouds cause large areas of positive and negative charge. When large oppositely charged areas get close enough together, electrons and/or ions race between them and create a path where more charged particles can follow - lightning.  On average, over 100 lightning strikes occur every second over the surface of the Earth. Here lightning strikes near a Space Shuttle before launch.  Lightning can be extremely dangerous - stay out of open areas during thunderstorms.")
    });

})
