import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `EventCard`.
 */
export type EventCardProps = SliceComponentProps<Content.EventCardSlice>;

/**
 * Component for "EventCard" Slices.
 */
const EventCard = ({ slice }: EventCardProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for event_card (variation: {slice.variation}) Slices
    </section>
  );
};

export default EventCard;
