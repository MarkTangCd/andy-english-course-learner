export function getAudioUrl(id: number, chapter: string, lesson: string) {
  return `/assets/audio/${id}_${chapter}/${lesson}`;
}
