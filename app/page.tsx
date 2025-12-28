import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import events from "@/lib/constants";

const page = () => {
  return (
    <section>
      <h1 className="text-center">
        The Hub for Every Dev <br /> Event You Can't Miss
      </h1>

      <p className="text-center mt-5">
        Hackatons, Meetups, and Confrences, All in One Place
      </p>

      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <ul className="events">
          {events.map((event) => (
            <li key={event.title}>
              {/* {...event} uses object spread to pass all properties of the `event` object as props */}
              <EventCard {...event} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default page;

/* This home page is server side rendered to get the benefits of SEO boost and allow quick load times  */
