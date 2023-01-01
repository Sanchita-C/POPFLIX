//Movie object
function Movie(genre, name, year, summary, poster){
    this.genre = genre;
    this.name = name;
    this.year = year;
    this.summary = summary;
    this.poster = poster;
}

//Create movie objects and pushing them into the movie array
const Movies = [];
//action
Movies.push(new Movie('Action', 'Bullet Train', '2022', 'Five assassins aboard a fast moving bullet train find out their missions have something in common.', 'https://upload.wikimedia.org/wikipedia/en/1/13/Bullet_Train_%28poster%29.jpeg'));
Movies.push(new Movie('Action', 'Black Adam', '2022', 'Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods--and imprisoned just as quickly--Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.', 'https://upload.wikimedia.org/wikipedia/en/a/a9/Black_Adam_%28film%29_poster.jpg'));
Movies.push(new Movie('Action', 'Alita : Battle Angel', '2019', 'A deactivated cyborgs revived, but cant remember anything of her past and goes on a quest to find out who she is.', 'https://upload.wikimedia.org/wikipedia/en/e/ee/Alita_Battle_Angel_%282019_poster%29.png'));
Movies.push(new Movie('Action', 'Top Gun', '1986', 'As students at the United States Navys elite fighter weapons school compete to be best in the class, one daring young pilot learns a few things from a civilian instructor that are not taught in the classroom.', 'https://upload.wikimedia.org/wikipedia/en/4/46/Top_Gun_Movie.jpg'));
Movies.push(new Movie('Action', 'Spider-Man: No Way Home', '2021', 'With Spider-Mans identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.', 'https://upload.wikimedia.org/wikipedia/en/0/00/Spider-Man_No_Way_Home_poster.jpg'));
//adventure
Movies.push(new Movie('Adventure', 'Black Panther: Wakanda Forever', '2022', 'The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King TChalla.', 'https://upload.wikimedia.org/wikipedia/en/3/3b/Black_Panther_Wakanda_Forever_poster.jpg'));
Movies.push(new Movie('Adventure', 'Disenchanted', '2022', 'Fifteen years after her happily ever after, Giselle questions her happiness, inadvertently turning the lives of those in the real world and Andalasia upside down in the process.', 'https://upload.wikimedia.org/wikipedia/en/9/93/Disenchanted.jpg'));
Movies.push(new Movie('Adventure', 'Back to the Future', '1985', 'Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.', 'https://upload.wikimedia.org/wikipedia/en/d/d2/Back_to_the_Future.jpg'));
Movies.push(new Movie('Adventure', 'Jurassic Park', '1993', 'A pragmatic paleontologist touring an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the parks cloned dinosaurs to run loose.', 'https://upload.wikimedia.org/wikipedia/en/e/e7/Jurassic_Park_poster.jpg'));
Movies.push(new Movie('Adventure', 'Slumberland', '2022', 'A young girl discovers a secret map to the dreamworld of Slumberland, and with the help of an eccentric outlaw, she traverses dreams and flees nightmares, with the hope that she will be able to see her late father again.', 'https://upload.wikimedia.org/wikipedia/en/7/77/Slumberland_%28film%29.jpg'));
//comedy
Movies.push(new Movie('Comedy', 'Deadpool', '2016', 'A wisecracking mercenary gets experimented on and becomes immortal but ugly, and sets out to track down the man who ruined his looks.', 'https://upload.wikimedia.org/wikipedia/en/2/23/Deadpool_%282016_poster%29.png'));
Movies.push(new Movie('Comedy', 'Free Guy', '2021', 'A bank teller discovers that he is actually an NPC inside a brutal, open world video game.', 'https://upload.wikimedia.org/wikipedia/en/1/1c/Free_Guy_2021_Poster.jpg'));
Movies.push(new Movie('Comedy', 'Superbad', '2007', 'Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.', 'https://upload.wikimedia.org/wikipedia/en/8/8b/Superbad_Poster.png'));
Movies.push(new Movie('Comedy', '21 Jump Street', '2012', 'A pair of underachieving cops are sent back to a local high school to blend in and bring down a synthetic drug ring.', 'https://upload.wikimedia.org/wikipedia/en/9/93/21JumpStreetfilm.jpg'));
Movies.push(new Movie('Comedy', 'Pineapple Express', '2008', 'A process server and his marijuana dealer wind up on the run from hitmen and a corrupt police officer after he witnesses his dealers boss murder a competitor while trying to serve papers on him.', 'https://upload.wikimedia.org/wikipedia/en/c/ca/Pineapple_Express_Poster.jpg'));
//documentary
Movies.push(new Movie('Documentary', 'My Octopus Teacher', '2020', 'A filmmaker forges an unusual friendship with an octopus living in a South African kelp forest, learning as the animal shares the mysteries of her world.', 'http://pencilsandpopcans.com/wp-content/uploads/2020/10/film-trailor.jpg'));
Movies.push(new Movie('Documentary', 'Stutz', '2022', 'Follow Hill and his therapist as he has candid discussions of mental health and the progressively worsening anxiety attacks related to movie promotion that have turned his dream job into a nightmare.', 'https://m.media-amazon.com/images/M/MV5BYzUzNzQyYWYtY2RjYy00MmFiLTg1MjAtZjk3OGMzNTMxNTMyXkEyXkFqcGdeQXVyMTE5NTM5NTU5._V1_QL75_UX190_CR0,0,190,281_.jpg'));
Movies.push(new Movie('Documentary', 'Citizenfour', '2014', 'A documentarian and a reporter travel to Hong Kong for the first of many meetings with Edward Snowden.', 'https://m.media-amazon.com/images/M/MV5BNTEwODQ0OTItOGU3ZS00ZTJkLThkY2EtNmQ5MDJjYzZkYzRhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg'));
Movies.push(new Movie('Documentary', 'The Summit', '2012', 'The story of the deadliest day on the worlds most dangerous mountain, when 11 climbers mysteriously perished on K2.', 'https://upload.wikimedia.org/wikipedia/en/d/df/The_Summit_poster.jpg'));
Movies.push(new Movie('Documentary', 'Fyre: The Greatest Party That Never Happened', '2018', 'An exclusive behind the scenes look at the infamous unraveling of the Fyre music festival.', 'https://upload.wikimedia.org/wikipedia/en/4/40/Fyre_poster.jpg'));
//Fantasy
Movies.push(new Movie('Fantasy', 'Shrek', '2001', 'A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back.', 'https://images.moviesanywhere.com/5948f139cd669fb5984d2c782e7678be/99cedd1f-ae78-4026-a3e8-b79840b71cbc.jpg'));
Movies.push(new Movie('Fantasy', 'Aladdin', '2019', 'A kind-hearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true.', 'https://images.disneymovieinsiders.com/5c8fa2184e3aa5ee6d2630279ae46975/dc351e5f-7953-4017-a047-9400122ecd1d.jpg'));
Movies.push(new Movie('Fantasy', 'The Lord of the Rings: The Fellowship of the Ring', '2001', 'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.', 'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg'));
Movies.push(new Movie('Fantasy', 'A Monster Calls', '2016', 'A boy seeks the help of a tree monster to cope with his single mothers terminal illness.', 'https://upload.wikimedia.org/wikipedia/en/2/2d/A_Monster_Calls_poster.jpg'));
Movies.push(new Movie('Fantasy', 'Harry Potter and the Prisoner of Azkaban', '2004', 'Harry Potter, Ron and Hermione return to Hogwarts School of Witchcraft and Wizardry for their third year of study, where they delve into the mystery surrounding an escaped prisoner who poses a dangerous threat to the young wizard.', 'https://i.pinimg.com/736x/d3/35/c0/d335c0c93cb33ee0834f4518943442e4--prisoner-of-azkaban-fantasy-movies.jpg'));
//horror
Movies.push(new Movie('Horror', 'Midsommar', '2019', 'A couple travels to Northern Europe to visit a rural hometowns fabled Swedish mid-summer festival. What begins as an idyllic retreat quickly devolves into an increasingly violent and bizarre competition at the hands of a pagan cult.', 'https://m.media-amazon.com/images/M/MV5BMzQxNzQzOTQwM15BMl5BanBnXkFtZTgwMDQ2NTcwODM@._V1_.jpg'));
Movies.push(new Movie('Horror', 'Goodnight Mommy', '2014', 'Twin boys move to a new house with their mother after she has face-changing cosmetic surgery, but under the bandages is someone the boys do not recognize.', 'https://m.media-amazon.com/images/M/MV5BMzMxZmExYmEtOTZkNi00YjNiLTgzNjQtZjIwZDU3NjZmOGE0XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg'));
Movies.push(new Movie('Horror', 'Hereditary', '2018', 'A grieving family is haunted by tragic and disturbing occurrences.', 'https://upload.wikimedia.org/wikipedia/en/d/d9/Hereditary.png'));
Movies.push(new Movie('Horror', 'Get Out', '2017', 'A young African-American visits his white girlfriends parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.', 'https://upload.wikimedia.org/wikipedia/en/a/a3/Get_Out_poster.png'));
Movies.push(new Movie('Horror', 'The Silence of the Lambs', '1991', 'A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.', 'https://upload.wikimedia.org/wikipedia/en/8/86/The_Silence_of_the_Lambs_poster.jpg'));
//Romance
Movies.push(new Movie('Romance', 'Titanic', '1997', 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.', 'https://upload.wikimedia.org/wikipedia/en/1/18/Titanic_%281997_film%29_poster.png'));
Movies.push(new Movie('Romance', 'Forrest Gump', '1994', 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.', 'https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg'));
Movies.push(new Movie('Romance', 'Brokeback Mountain', '2005', 'Ennis and Jack are two shepherds who develop a sexual and emotional relationship. Their relationship becomes complicated when both of them get married to their respective girlfriends.', 'https://upload.wikimedia.org/wikipedia/en/a/a1/Brokeback_mountain.jpg'));
Movies.push(new Movie('Romance', 'La la land', '2016', 'While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.', 'https://upload.wikimedia.org/wikipedia/en/a/ab/La_La_Land_%28film%29.png'));
Movies.push(new Movie('Romance', 'Atonement', '2007', 'Thirteen-year-old fledgling writer Briony Tallis irrevocably changes the course of several lives when she accuses her older sisters lover of a crime he did not commit.', 'https://m.media-amazon.com/images/M/MV5BMGRiYjE0YzItMzk3Zi00ZmYwLWJjNDktYTAwYjIwMjIxYzM3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'));
//kids
Movies.push(new Movie('Kids', 'Coraline', '2009', 'An adventurous 11-year-old girl finds another world that is a strangely idealized version of her frustrating home, but it has sinister secrets.', 'https://upload.wikimedia.org/wikipedia/en/3/36/Coraline_poster.jpg'));
Movies.push(new Movie('Kids', 'Luca', '2021', 'On the Italian Riviera, an unlikely but strong friendship grows between a human being and a sea monster disguised as a human.', 'https://m.media-amazon.com/images/M/MV5BZTQyNTU0MDktYTFkYi00ZjNhLWE2ODctMzBkM2U1ZTk3YTMzXkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_.jpg'));
Movies.push(new Movie('Kids', 'Spirited Away', '2001', 'During her familys move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.', 'https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'));
Movies.push(new Movie('Kids', 'Kung Fu Panda', '2008', 'To everyones surprise, including his own, Po, an overweight, clumsy panda, is chosen as protector of the Valley of Peace. His suitability will soon be tested as the valleys arch-enemy is on his way.', 'https://upload.wikimedia.org/wikipedia/en/7/76/Kungfupanda.jpg'));
Movies.push(new Movie('Kids', 'Ratatouille', '2007', 'A rat who can cook makes an unusual alliance with a young kitchen worker at a famous Paris restaurant.', 'https://m.media-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_FMjpg_UX1000_.jpg'));
//scifi

Movies.push(new Movie('ScienceFiction', 'Mad Max: Fury Road', '2015', 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.', 'https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'));
Movies.push(new Movie('ScienceFiction', 'Interstellar', '2014', 'A team of explorers travel through a wormhole in space in an attempt to ensure humanitys survival.', 'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'));
Movies.push(new Movie('ScienceFiction', 'Avatar', '2009', 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.', 'https://upload.wikimedia.org/wikipedia/en/d/d6/Avatar_%282009_film%29_poster.jpg'));
Movies.push(new Movie('ScienceFiction', 'The Hunger Games', '2012', 'Katniss Everdeen voluntarily takes her younger sisters place in the Hunger Games: a televised competition in which two teenagers from each of the twelve Districts of Panem are chosen at random to fight to the death.', 'https://m.media-amazon.com/images/M/MV5BMjA4NDg3NzYxMF5BMl5BanBnXkFtZTcwNTgyNzkyNw@@._V1_.jpg'));
Movies.push(new Movie('ScienceFiction', 'Ready Player One', '2018', 'When the creator of a virtual reality called the OASIS dies, he makes a posthumous challenge to all OASIS users to find his Easter Egg, which will give the finder his fortune and control of his world.', 'https://m.media-amazon.com/images/M/MV5BY2JiYTNmZTctYTQ1OC00YjU4LWEwMjYtZjkwY2Y5MDI0OTU3XkEyXkFqcGdeQXVyNTI4MzE4MDU@._V1_.jpg'));