import BeginnerLessonLayout from "../../beginner/BeginnerLessonLayout";

export default function BeginnerLesson9() {
  const words = [
    {
      ru: 'врач',
      enRight: 'doctor',
      imageUrl: 'https://storage.googleapis.com/langy.su/images/professions/doctors.jpg',
      enWrong: ['teacher', 'engineer'],
      audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson8/doctor.mp3'
    },
    {
      ru: 'учитель',
      enRight: 'teacher',
      imageUrl: 'https://storage.googleapis.com/langy.su/images/professions/teachers.jpg',
      enWrong: ['nurse', 'chef'],
      audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson8/teacher.mp3'
    },
    {
      ru: 'инженер',
      enRight: 'engineer',
      imageUrl: 'https://storage.googleapis.com/langy.su/images/professions/engineer.jpg',
      enWrong: ['lawyer', 'pilot'],
      audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson8/engineer.mp3'
    },
    {
      ru: 'повар',
      enRight: 'chef',
      imageUrl: 'https://storage.googleapis.com/langy.su/images/professions/chef.jpg',
      enWrong: ['mechanic', 'artist'],
      audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson8/chef.mp3'
    },
    {
      ru: 'механик',
      enRight: 'mechanic',
      imageUrl: 'https://storage.googleapis.com/langy.su/images/professions/mechanic.jpg',
      enWrong: ['dentist', 'journalist'],
      audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson8/mechanic.mp3'
    },
    {
      ru: 'юрист',
      enRight: 'lawyer',
      imageUrl: 'https://storage.googleapis.com/langy.su/images/professions/lawer.jpg',
      enWrong: ['architect', 'waiter'],
      audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson8/lawer.mp3'
    },
    {
      ru: 'пилот',
      enRight: 'pilot',
      imageUrl: 'https://storage.googleapis.com/langy.su/images/professions/pilot.jpg',
      enWrong: ['electrician', 'pharmacist'],
      audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson8/pilot.mp3'
    },
    {
      ru: 'архитектор',
      enRight: 'architect',
      imageUrl: 'https://storage.googleapis.com/langy.su/images/professions/architect.jpg',
      enWrong: ['plumber', 'chef'],
      audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson8/architect.mp3'
    },
    {
      ru: 'журналист',
      enRight: 'journalist',
      imageUrl: 'https://storage.googleapis.com/langy.su/images/professions/journalist.jpg',
      enWrong: ['veterinarian', 'scientist'],
      audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson8/journalist.mp3'
    },
    {
      ru: 'электрик',
      enRight: 'electrician',
      imageUrl: 'https://storage.googleapis.com/langy.su/images/professions/electrician.jpg',
      enWrong: ['firefighter', 'waiter'],
      audioSrc: 'https://storage.googleapis.com/langy.su/audio/lesson8/electrician.mp3'
    }
  ];

  return (
    <>
      <BeginnerLessonLayout
        lessonNumber={9}
        isCardLesson={true}
        words={words}
        nextUrl='/lessons/beginner/lesson10'
      />
    </>
  )
}
