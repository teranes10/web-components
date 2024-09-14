export function emit(
  element: Element,
  eventName: keyof GlobalEventHandlers | (NonNullable<unknown> & `on${string}`),
  event: Event
) {
  try {
    const name = eventName?.substring(2);
    if (!name) {
      return;
    }

    const newEvent = new Event(name, event);

    element.dispatchEvent(newEvent);

    const attr = element.getAttribute(eventName);
    const listener = new Function("return " + attr)();
    if (typeof listener === "function") {
      listener(newEvent);
    }
  } catch (error) {
    throw error;
  }
}
