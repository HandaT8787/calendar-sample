// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"

document.addEventListener("turbo:load", () => {
  const calendarEl = document.getElementById("calendar");
  if (!calendarEl) return;

  const getViewName = () => window.innerWidth < 991.98 ? "listMonth" : "dayGridMonth";

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: getViewName(),
    locale: 'ja',
    events: calendarEl.dataset.eventsUrl
  });
  calendar.render();

  window.addEventListener("resize", () => {
    calendar.changeView(getViewName());
  });
});
