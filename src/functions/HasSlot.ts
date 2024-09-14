export function hasSlot(root?: ShadowRoot | null, name?: string) {
  return !!root
    ?.querySelector<HTMLSlotElement>(`slot[name="${name}"]`)
    ?.assignedNodes().length;
}
