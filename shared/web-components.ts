import { defineCustomElement } from "vue";

export type RegisterOptions = {
    prefix?: string
}

export function registerWebComponent(name: string, component: any, { prefix = 't' }: RegisterOptions = {}) {
    customElements.define(`${prefix ? `${prefix}-` : ''}${name}`, component);
}

export type DefineOptions = {
    emits?: string[]
}

export function defineWebComponent(component: any, { emits = [] }: DefineOptions = {}) {
    return defineCustomElement(component, {
        shadowRoot: false,
        configureApp(app) {
            if (!emit.length) {
                return
            }

            let el: Element | null;
            const listeners: { [key: string]: (e: Event) => void } = {};

            app.mixin({
                mounted() {
                    el = this.$el?.parentElement as HTMLElement;
                    if (!el) {
                        return;
                    }

                    emits.forEach((eventName: string) => {
                        listeners[eventName] = (e: Event) => {
                            emit(el!, eventName, e);
                        };

                        el!.addEventListener(eventName, listeners[eventName]);
                    });
                },
                beforeUnmount() {
                    if (!el) {
                        return
                    }

                    emits.forEach((eventName: string) => {
                        if (listeners[eventName]) {
                            el!.removeEventListener(eventName, listeners[eventName]);
                        }
                    });
                }
            });
        }
    });
}

export function emit(
    element: Element,
    eventName: string,
    event: Event
) {
    try {
        if (!event || (event as any).reemitted) {
            return
        }

        const eventType = eventName.startsWith("on") ? eventName.slice(2) : eventName;
        if (!eventType) {
            return;
        }

        const attr = element.getAttribute('on' + eventType);
        if (!attr) {
            return;
        }

        const listener = new Function("event", attr)
        if (typeof listener !== "function") {
            return
        }

        const newEvent = new Event(eventType, event);
        (newEvent as any).reemitted = true;

        listener(newEvent);
    } catch (error) {
        throw error;
    }
}