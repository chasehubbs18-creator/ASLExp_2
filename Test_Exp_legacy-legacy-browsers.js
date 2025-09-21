/***************** 
 * Test_Exp *
 *****************/


// store info about the experiment session:
let expName = 'Test_Exp';  // from the Builder filename that created this script
let expInfo = {
    'participant': `${util.pad(Number.parseFloat(util.randint(0, 999999)).toFixed(0), 6)}`,
    'session': '001',
};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
  units: 'height',
  waitBlanking: true,
  backgroundImage: '',
  backgroundFit: 'none',
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); },flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(StartRoutineBegin());
flowScheduler.add(StartRoutineEachFrame());
flowScheduler.add(StartRoutineEnd());
const TrainingLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(TrainingLoopBegin(TrainingLoopScheduler));
flowScheduler.add(TrainingLoopScheduler);
flowScheduler.add(TrainingLoopEnd);


const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);


flowScheduler.add(BreakRoutineBegin());
flowScheduler.add(BreakRoutineEachFrame());
flowScheduler.add(BreakRoutineEnd());
const trials_2LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_2LoopBegin(trials_2LoopScheduler));
flowScheduler.add(trials_2LoopScheduler);
flowScheduler.add(trials_2LoopEnd);


flowScheduler.add(Break_2RoutineBegin());
flowScheduler.add(Break_2RoutineEachFrame());
flowScheduler.add(Break_2RoutineEnd());
const trials_3LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_3LoopBegin(trials_3LoopScheduler));
flowScheduler.add(trials_3LoopScheduler);
flowScheduler.add(trials_3LoopEnd);


flowScheduler.add(BreakRoutineBegin());
flowScheduler.add(BreakRoutineEachFrame());
flowScheduler.add(BreakRoutineEnd());
const trials_4LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_4LoopBegin(trials_4LoopScheduler));
flowScheduler.add(trials_4LoopScheduler);
flowScheduler.add(trials_4LoopEnd);


flowScheduler.add(GoodbyeRoutineBegin());
flowScheduler.add(GoodbyeRoutineEachFrame());
flowScheduler.add(GoodbyeRoutineEnd());
flowScheduler.add(quitPsychoJS, 'Thank you for your patience.', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, 'Thank you for your patience.', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    // resources:
    {'name': 'Research/Excel books/Training Book.xlsx', 'path': 'Research/Excel books/Training Book.xlsx'},
    {'name': 'Research/Training Images/ImageW.png', 'path': 'Research/Training Images/ImageW.png'},
    {'name': 'Research/Training Images/ImageTouchX.png', 'path': 'Research/Training Images/ImageTouchX.png'},
    {'name': 'Research/Training Images/Image3.png', 'path': 'Research/Training Images/Image3.png'},
    {'name': 'Research/Training Images/ImageG.png', 'path': 'Research/Training Images/ImageG.png'},
    {'name': 'Research/Training Images/ImageAdducted5.png', 'path': 'Research/Training Images/ImageAdducted5.png'},
    {'name': 'Research/Training Images/ImageB.png', 'path': 'Research/Training Images/ImageB.png'},
    {'name': 'Research/Training Images/Image5.png', 'path': 'Research/Training Images/Image5.png'},
    {'name': 'Research/Training Images/Image8.png', 'path': 'Research/Training Images/Image8.png'},
    {'name': 'Research/Training Images/ImageA.png', 'path': 'Research/Training Images/ImageA.png'},
    {'name': 'Research/Training Images/ImageOpen8.png', 'path': 'Research/Training Images/ImageOpen8.png'},
    {'name': 'Research/Training Images/ImageH_URadial.png', 'path': 'Research/Training Images/ImageH_URadial.png'},
    {'name': 'Research/Training Images/ImageK.png', 'path': 'Research/Training Images/ImageK.png'},
    {'name': 'Research/Training Images/Image1.png', 'path': 'Research/Training Images/Image1.png'},
    {'name': 'Research/Training Images/ImageY.png', 'path': 'Research/Training Images/ImageY.png'},
    {'name': 'Research/Training Images/ImageU.png', 'path': 'Research/Training Images/ImageU.png'},
    {'name': 'Research/Training Images/ImageF.png', 'path': 'Research/Training Images/ImageF.png'},
    {'name': 'Research/Training Images/ImageE.png', 'path': 'Research/Training Images/ImageE.png'},
    {'name': 'Research/Training Images/ImageCurved3.png', 'path': 'Research/Training Images/ImageCurved3.png'},
    {'name': 'Research/Training Images/Image4.png', 'path': 'Research/Training Images/Image4.png'},
    {'name': 'Research/Training Images/ImageUlnar1.png', 'path': 'Research/Training Images/ImageUlnar1.png'},
    {'name': 'Research/Training Images/ImageCurvedV.png', 'path': 'Research/Training Images/ImageCurvedV.png'},
    {'name': 'Research/Training Images/ImageFlatO.png', 'path': 'Research/Training Images/ImageFlatO.png'},
    {'name': 'Research/Training Images/ImageS.png', 'path': 'Research/Training Images/ImageS.png'},
    {'name': 'Research/Training Images/Imagei.png', 'path': 'Research/Training Images/Imagei.png'},
    {'name': 'Research/Training Images/Image10.png', 'path': 'Research/Training Images/Image10.png'},
    {'name': 'Research/Training Images/ImageO.png', 'path': 'Research/Training Images/ImageO.png'},
    {'name': 'Research/Training Images/ImageCurvedL.png', 'path': 'Research/Training Images/ImageCurvedL.png'},
    {'name': 'Research/Training Images/ImageC.png', 'path': 'Research/Training Images/ImageC.png'},
    {'name': 'Research/Training Images/ImageCurved5.png', 'path': 'Research/Training Images/ImageCurved5.png'},
    {'name': 'Research/Training Images/ImageL.png', 'path': 'Research/Training Images/ImageL.png'},
    {'name': 'Research/Training Images/ImageV.png', 'path': 'Research/Training Images/ImageV.png'},
    {'name': 'Research/Training Images/ImageX.png', 'path': 'Research/Training Images/ImageX.png'},
    {'name': 'Research/Training Images/ImageAdductedBent5.png', 'path': 'Research/Training Images/ImageAdductedBent5.png'},
    {'name': 'Research/Training Images/ImageR.png', 'path': 'Research/Training Images/ImageR.png'},
    {'name': 'Research/Training Images/ImageD.png', 'path': 'Research/Training Images/ImageD.png'},
    {'name': 'Research/Training Images/ImageUlnarL.png', 'path': 'Research/Training Images/ImageUlnarL.png'},
    {'name': 'Research/Excel books/Part_1.xlsx', 'path': 'Research/Excel books/Part_1.xlsx'},
    {'name': 'Research/All noisy HS/1 HS 90%/90_1_Elbow_Circle_Down24.mp4', 'path': 'Research/All noisy HS/1 HS 90%/90_1_Elbow_Circle_Down24.mp4'},
    {'name': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Mouth_Twist_Down12.mp4', 'path': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Mouth_Twist_Down12.mp4'},
    {'name': 'Research/All noisy HS/4 HS 90%/90_4_Elbow_Circle_Forward22.mp4', 'path': 'Research/All noisy HS/4 HS 90%/90_4_Elbow_Circle_Forward22.mp4'},
    {'name': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Elbow_Twist_Down23.mp4', 'path': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Elbow_Twist_Down23.mp4'},
    {'name': 'Research/All noisy HS/5 HS 90%/90_5_Neutral_Twist_Forward1.mp4', 'path': 'Research/All noisy HS/5 HS 90%/90_5_Neutral_Twist_Forward1.mp4'},
    {'name': 'Research/All noisy HS/E HS 90%/90_E_Neutral_Circle_Self5.mp4', 'path': 'Research/All noisy HS/E HS 90%/90_E_Neutral_Circle_Self5.mp4'},
    {'name': 'Research/All noisy HS/1 HS 90%/90_1_Mouth_Twist_Self11.mp4', 'path': 'Research/All noisy HS/1 HS 90%/90_1_Mouth_Twist_Self11.mp4'},
    {'name': 'Research/All noisy HS/Y HS 90%/90_Y_Mouth_Lateral_Down20.mp4', 'path': 'Research/All noisy HS/Y HS 90%/90_Y_Mouth_Lateral_Down20.mp4'},
    {'name': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Mouth_Lateral_Down18.mp4', 'path': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Mouth_Lateral_Down18.mp4'},
    {'name': 'Research/All noisy HS/Y HS 90%/90_Y_Mouth_Lateral_Self19.mp4', 'path': 'Research/All noisy HS/Y HS 90%/90_Y_Mouth_Lateral_Self19.mp4'},
    {'name': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Neutral_Circle_Self5.mp4', 'path': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Neutral_Circle_Self5.mp4'},
    {'name': 'Research/All noisy HS/i HS 90%/90_I_Elbow_Lateral_Self29.mp4', 'path': 'Research/All noisy HS/i HS 90%/90_I_Elbow_Lateral_Self29.mp4'},
    {'name': 'Research/All noisy HS/O HS 90%/90_O_Mouth_Lateral_Down20.mp4', 'path': 'Research/All noisy HS/O HS 90%/90_O_Mouth_Lateral_Down20.mp4'},
    {'name': 'Research/All noisy HS/W HS 90%/90_W_Mouth_Lateral_Forward17.mp4', 'path': 'Research/All noisy HS/W HS 90%/90_W_Mouth_Lateral_Forward17.mp4'},
    {'name': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Neutral_Twist_Down4.mp4', 'path': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Neutral_Twist_Down4.mp4'},
    {'name': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Mouth_Circle_Self14.mp4', 'path': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Mouth_Circle_Self14.mp4'},
    {'name': 'Research/All noisy HS/R HS 90%/90_R_Neutral_Circle_Down8.mp4', 'path': 'Research/All noisy HS/R HS 90%/90_R_Neutral_Circle_Down8.mp4'},
    {'name': 'Research/All noisy HS/O HS 90%/90_O_Elbow_Twist_Forward21.mp4', 'path': 'Research/All noisy HS/O HS 90%/90_O_Elbow_Twist_Forward21.mp4'},
    {'name': 'Research/All noisy HS/R HS 90%/90_R_Elbow_Twist_Forward22.mp4', 'path': 'Research/All noisy HS/R HS 90%/90_R_Elbow_Twist_Forward22.mp4'},
    {'name': 'Research/All noisy HS/5 HS 90%/90_5_Elbow_Lateral_Down27.mp4', 'path': 'Research/All noisy HS/5 HS 90%/90_5_Elbow_Lateral_Down27.mp4'},
    {'name': 'Research/All noisy HS/W HS 90%/90_W_Mouth_Twist_Self12.mp4', 'path': 'Research/All noisy HS/W HS 90%/90_W_Mouth_Twist_Self12.mp4'},
    {'name': 'Research/All noisy HS/B HS 90%/90_B_Neutral_Circle_Forward4.mp4', 'path': 'Research/All noisy HS/B HS 90%/90_B_Neutral_Circle_Forward4.mp4'},
    {'name': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Mouth_Lateral_Down19.mp4', 'path': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Mouth_Lateral_Down19.mp4'},
    {'name': 'Research/All noisy HS/3 HS 90%/90_3_Elbow_Twist_Self20.mp4', 'path': 'Research/All noisy HS/3 HS 90%/90_3_Elbow_Twist_Self20.mp4'},
    {'name': 'Research/All noisy HS/10 HS 90%/90_10_Mouth_Lateral_Down20.mp4', 'path': 'Research/All noisy HS/10 HS 90%/90_10_Mouth_Lateral_Down20.mp4'},
    {'name': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Mouth_Lateral_Forward17.mp4', 'path': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Mouth_Lateral_Forward17.mp4'},
    {'name': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Elbow_Twist_Self20.mp4', 'path': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Elbow_Twist_Self20.mp4'},
    {'name': 'Research/All noisy HS/U HS 90%/90_U_Mouth_Lateral_Down20.mp4', 'path': 'Research/All noisy HS/U HS 90%/90_U_Mouth_Lateral_Down20.mp4'},
    {'name': 'Research/All noisy HS/F HS 90%/90_F_Mouth_Lateral_Self18.mp4', 'path': 'Research/All noisy HS/F HS 90%/90_F_Mouth_Lateral_Self18.mp4'},
    {'name': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Mouth_Lateral_Forward16.mp4', 'path': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Mouth_Lateral_Forward16.mp4'},
    {'name': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Neutral_Twist_Forward1.mp4', 'path': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Neutral_Twist_Forward1.mp4'},
    {'name': 'Research/All noisy HS/8 HS 90%/90_8_Neutral_Circle_Down7.mp4', 'path': 'Research/All noisy HS/8 HS 90%/90_8_Neutral_Circle_Down7.mp4'},
    {'name': 'Research/All noisy HS/G HS 90%/90_G_Elbow_Twist_Down22.mp4', 'path': 'Research/All noisy HS/G HS 90%/90_G_Elbow_Twist_Down22.mp4'},
    {'name': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Elbow_Circle_Down25.mp4', 'path': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Elbow_Circle_Down25.mp4'},
    {'name': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Elbow_Twist_Forward19.mp4', 'path': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Elbow_Twist_Forward19.mp4'},
    {'name': 'Research/All noisy HS/D HS 90%/90_D_Mouth_Lateral_Forward16.mp4', 'path': 'Research/All noisy HS/D HS 90%/90_D_Mouth_Lateral_Forward16.mp4'},
    {'name': 'Research/All noisy HS/L HS 90%/90_L_Neutral_Circle_Self5.mp4', 'path': 'Research/All noisy HS/L HS 90%/90_L_Neutral_Circle_Self5.mp4'},
    {'name': 'Research/All noisy HS/R HS 90%/90_R_Elbow_Circle_Self27.mp4', 'path': 'Research/All noisy HS/R HS 90%/90_R_Elbow_Circle_Self27.mp4'},
    {'name': 'Research/All noisy HS/K HS 90%/90_K_Mouth_Circle_Self16.mp4', 'path': 'Research/All noisy HS/K HS 90%/90_K_Mouth_Circle_Self16.mp4'},
    {'name': 'Research/All noisy HS/Y HS 90%/90_Y_Neutral_Twist_Forward1.mp4', 'path': 'Research/All noisy HS/Y HS 90%/90_Y_Neutral_Twist_Forward1.mp4'},
    {'name': 'Research/All noisy HS/5 HS 90%/90_5_Elbow_Circle_Self23.mp4', 'path': 'Research/All noisy HS/5 HS 90%/90_5_Elbow_Circle_Self23.mp4'},
    {'name': 'Research/All noisy HS/X HS 90%/90_X_Mouth_Circle_Forward13.mp4', 'path': 'Research/All noisy HS/X HS 90%/90_X_Mouth_Circle_Forward13.mp4'},
    {'name': 'Research/All noisy HS/8 HS 90%/90_8_Neutral_Circle_Forward5.mp4', 'path': 'Research/All noisy HS/8 HS 90%/90_8_Neutral_Circle_Forward5.mp4'},
    {'name': 'Research/All noisy HS/G HS 90%/90_G_Mouth_Circle_Forward13.mp4', 'path': 'Research/All noisy HS/G HS 90%/90_G_Mouth_Circle_Forward13.mp4'},
    {'name': 'Research/All noisy HS/B HS 90%/90_B_Neutral_Lateral_Self9.mp4', 'path': 'Research/All noisy HS/B HS 90%/90_B_Neutral_Lateral_Self9.mp4'},
    {'name': 'Research/All noisy HS/C HS 90%/90_C_Neutral_Lateral_Self8.mp4', 'path': 'Research/All noisy HS/C HS 90%/90_C_Neutral_Lateral_Self8.mp4'},
    {'name': 'Research/All noisy HS/B HS 90%/90_B_Elbow_Twist_Forward21.mp4', 'path': 'Research/All noisy HS/B HS 90%/90_B_Elbow_Twist_Forward21.mp4'},
    {'name': 'Research/All noisy HS/W HS 90%/90_W_Neutral_Twist_Forward1.mp4', 'path': 'Research/All noisy HS/W HS 90%/90_W_Neutral_Twist_Forward1.mp4'},
    {'name': 'Research/All noisy HS/G HS 90%/90_G_Elbow_Lateral_Forward27.mp4', 'path': 'Research/All noisy HS/G HS 90%/90_G_Elbow_Lateral_Forward27.mp4'},
    {'name': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Elbow_Lateral_Self27.mp4', 'path': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Elbow_Lateral_Self27.mp4'},
    {'name': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Elbow_Circle_Down27.mp4', 'path': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Elbow_Circle_Down27.mp4'},
    {'name': 'Research/All noisy HS/i HS 90%/90_I_Mouth_Twist_Forward12.mp4', 'path': 'Research/All noisy HS/i HS 90%/90_I_Mouth_Twist_Forward12.mp4'},
    {'name': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Mouth_Lateral_Down18.mp4', 'path': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Mouth_Lateral_Down18.mp4'},
    {'name': 'Research/All noisy HS/R HS 90%/90_R_Elbow_Twist_Self 24.mp4', 'path': 'Research/All noisy HS/R HS 90%/90_R_Elbow_Twist_Self 24.mp4'},
    {'name': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Mouth_Circle_Self14.mp4', 'path': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Mouth_Circle_Self14.mp4'},
    {'name': 'Research/All noisy HS/E HS 90%/90_E_Neutral_Twist_Self2.mp4', 'path': 'Research/All noisy HS/E HS 90%/90_E_Neutral_Twist_Self2.mp4'},
    {'name': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Neutral_Circle_Down6.mp4', 'path': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Neutral_Circle_Down6.mp4'},
    {'name': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Mouth_Circle_Down15.mp4', 'path': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Mouth_Circle_Down15.mp4'},
    {'name': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Neutral_Circle_Forward4.mp4', 'path': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Neutral_Circle_Forward4.mp4'},
    {'name': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Elbow_Twist_Self20.mp4', 'path': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Elbow_Twist_Self20.mp4'},
    {'name': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Neutral_Lateral_Self8.mp4', 'path': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Neutral_Lateral_Self8.mp4'},
    {'name': 'Research/All noisy HS/3 HS 90%/90_3_Elbow_Twist_Down21.mp4', 'path': 'Research/All noisy HS/3 HS 90%/90_3_Elbow_Twist_Down21.mp4'},
    {'name': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Elbow_Twist_Forward20.mp4', 'path': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Elbow_Twist_Forward20.mp4'},
    {'name': 'Research/All noisy HS/W HS 90%/90_W_Neutral_Lateral_Down10.mp4', 'path': 'Research/All noisy HS/W HS 90%/90_W_Neutral_Lateral_Down10.mp4'},
    {'name': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Mouth_Lateral_Self18.mp4', 'path': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Mouth_Lateral_Self18.mp4'},
    {'name': 'Research/All noisy HS/U HS 90%/90_U_Elbow_Lateral_Down30.mp4', 'path': 'Research/All noisy HS/U HS 90%/90_U_Elbow_Lateral_Down30.mp4'},
    {'name': 'Research/All noisy HS/8 HS 90%/90_8_Elbow_Lateral_Self27.mp4', 'path': 'Research/All noisy HS/8 HS 90%/90_8_Elbow_Lateral_Self27.mp4'},
    {'name': 'Research/All noisy HS/S HS 90%/90_S_Neutral_Twist_Self2.mp4', 'path': 'Research/All noisy HS/S HS 90%/90_S_Neutral_Twist_Self2.mp4'},
    {'name': 'Research/All noisy HS/V HS 90%/90_V_Elbow_Lateral_Down30.mp4', 'path': 'Research/All noisy HS/V HS 90%/90_V_Elbow_Lateral_Down30.mp4'},
    {'name': 'Research/All noisy HS/5 HS 90%/90_5_Neutral_Lateral_Forward7.mp4', 'path': 'Research/All noisy HS/5 HS 90%/90_5_Neutral_Lateral_Forward7.mp4'},
    {'name': 'Research/All noisy HS/G HS 90%/90_G_Elbow_Circle_Down26.mp4', 'path': 'Research/All noisy HS/G HS 90%/90_G_Elbow_Circle_Down26.mp4'},
    {'name': 'Research/All noisy HS/U HS 90%/90_U_Mouth_Circle_Forward13.mp4', 'path': 'Research/All noisy HS/U HS 90%/90_U_Mouth_Circle_Forward13.mp4'},
    {'name': 'Research/All noisy HS/L HS 90%/90_L_Neutral_Twist_Down3.mp4', 'path': 'Research/All noisy HS/L HS 90%/90_L_Neutral_Twist_Down3.mp4'},
    {'name': 'Research/All noisy HS/Y HS 90%/90_Y_Neutral_Circle_Down8.mp4', 'path': 'Research/All noisy HS/Y HS 90%/90_Y_Neutral_Circle_Down8.mp4'},
    {'name': 'Research/All noisy HS/1 HS 90%/90_1_Mouth_Lateral_Down18.mp4', 'path': 'Research/All noisy HS/1 HS 90%/90_1_Mouth_Lateral_Down18.mp4'},
    {'name': 'Research/All noisy HS/X HS 90%/90_X_Mouth_Lateral_Forward16.mp4', 'path': 'Research/All noisy HS/X HS 90%/90_X_Mouth_Lateral_Forward16.mp4'},
    {'name': 'Research/All noisy HS/O HS 90%/90_O_Elbow_Circle_Down26.mp4', 'path': 'Research/All noisy HS/O HS 90%/90_O_Elbow_Circle_Down26.mp4'},
    {'name': 'Research/All noisy HS/5 HS 90%/90_5_Neutral_Twist_Self2.mp4', 'path': 'Research/All noisy HS/5 HS 90%/90_5_Neutral_Twist_Self2.mp4'},
    {'name': 'Research/All noisy HS/D HS 90%/90_D_Elbow_Lateral_Self26.mp4', 'path': 'Research/All noisy HS/D HS 90%/90_D_Elbow_Lateral_Self26.mp4'},
    {'name': 'Research/All noisy HS/C HS 90%/90_C_Elbow_Twist_Self20.mp4', 'path': 'Research/All noisy HS/C HS 90%/90_C_Elbow_Twist_Self20.mp4'},
    {'name': 'Research/All noisy HS/W HS 90%/90_W_Neutral_Circle_Forward5.mp4', 'path': 'Research/All noisy HS/W HS 90%/90_W_Neutral_Circle_Forward5.mp4'},
    {'name': 'Research/All noisy HS/4 HS 90%/90_4_Neutral_Twist_Self2.mp4', 'path': 'Research/All noisy HS/4 HS 90%/90_4_Neutral_Twist_Self2.mp4'},
    {'name': 'Research/All noisy HS/D HS 90%/90_D_Neutral_Lateral_Down9.mp4', 'path': 'Research/All noisy HS/D HS 90%/90_D_Neutral_Lateral_Down9.mp4'},
    {'name': 'Research/All noisy HS/C HS 90%/90_C_Mouth_Lateral_Forward16.mp4', 'path': 'Research/All noisy HS/C HS 90%/90_C_Mouth_Lateral_Forward16.mp4'},
    {'name': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Mouth_Twist_Forward12.mp4', 'path': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Mouth_Twist_Forward12.mp4'},
    {'name': 'Research/All noisy HS/X HS 90%/90_X_Elbow_Lateral_Self26.mp4', 'path': 'Research/All noisy HS/X HS 90%/90_X_Elbow_Lateral_Self26.mp4'},
    {'name': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Neutral_Circle_Forward5.mp4', 'path': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Neutral_Circle_Forward5.mp4'},
    {'name': 'Research/All noisy HS/3 HS 90%/90_3_Mouth_Twist_Forward10.mp4', 'path': 'Research/All noisy HS/3 HS 90%/90_3_Mouth_Twist_Forward10.mp4'},
    {'name': 'Research/All noisy HS/5 HS 90%/90_5_Mouth_Twist_Down12.mp4', 'path': 'Research/All noisy HS/5 HS 90%/90_5_Mouth_Twist_Down12.mp4'},
    {'name': 'Research/All noisy HS/C HS 90%/90_C_Neutral_Lateral_Forward7.mp4', 'path': 'Research/All noisy HS/C HS 90%/90_C_Neutral_Lateral_Forward7.mp4'},
    {'name': 'Research/All noisy HS/S HS 90%/90_S_Mouth_Twist_Self11.mp4', 'path': 'Research/All noisy HS/S HS 90%/90_S_Mouth_Twist_Self11.mp4'},
    {'name': 'Research/All noisy HS/4 HS 90%/90_4_Elbow_Lateral_Down27.mp4', 'path': 'Research/All noisy HS/4 HS 90%/90_4_Elbow_Lateral_Down27.mp4'},
    {'name': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Elbow_Twist_Self21.mp4', 'path': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Elbow_Twist_Self21.mp4'},
    {'name': 'Research/All noisy HS/V HS 90%/90_V_Neutral_Twist_Self3.mp4', 'path': 'Research/All noisy HS/V HS 90%/90_V_Neutral_Twist_Self3.mp4'},
    {'name': 'Research/All noisy HS/K HS 90%/90_K_Elbow_Twist_Self22.mp4', 'path': 'Research/All noisy HS/K HS 90%/90_K_Elbow_Twist_Self22.mp4'},
    {'name': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Elbow_Twist_Down22.mp4', 'path': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Elbow_Twist_Down22.mp4'},
    {'name': 'Research/All noisy HS/Y HS 90%/90_Y_Mouth_Lateral_Forward18.mp4', 'path': 'Research/All noisy HS/Y HS 90%/90_Y_Mouth_Lateral_Forward18.mp4'},
    {'name': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Neutral_Lateral_Down10.mp4', 'path': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Neutral_Lateral_Down10.mp4'},
    {'name': 'Research/All noisy HS/3 HS 90%/90_3_Elbow_Circle_Down24.mp4', 'path': 'Research/All noisy HS/3 HS 90%/90_3_Elbow_Circle_Down24.mp4'},
    {'name': 'Research/All noisy HS/U HS 90%/90_U_Neutral_Lateral_Self8.mp4', 'path': 'Research/All noisy HS/U HS 90%/90_U_Neutral_Lateral_Self8.mp4'},
    {'name': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Mouth_Circle_Self16.mp4', 'path': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Mouth_Circle_Self16.mp4'},
    {'name': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Neutral_Lateral_Down10.mp4', 'path': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Neutral_Lateral_Down10.mp4'},
    {'name': 'Research/All noisy HS/W HS 90%/90_W_Mouth_Lateral_Self18.mp4', 'path': 'Research/All noisy HS/W HS 90%/90_W_Mouth_Lateral_Self18.mp4'},
    {'name': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Neutral_Circle_Down6.mp4', 'path': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Neutral_Circle_Down6.mp4'},
    {'name': 'Research/All noisy HS/R HS 90%/90_R_Mouth_Lateral_Forward19.mp4', 'path': 'Research/All noisy HS/R HS 90%/90_R_Mouth_Lateral_Forward19.mp4'},
    {'name': 'Research/All noisy HS/O HS 90%/90_O_Neutral_Lateral_Self10.mp4', 'path': 'Research/All noisy HS/O HS 90%/90_O_Neutral_Lateral_Self10.mp4'},
    {'name': 'Research/All noisy HS/Y HS 90%/90_Y_Neutral_Circle_Forward6.mp4', 'path': 'Research/All noisy HS/Y HS 90%/90_Y_Neutral_Circle_Forward6.mp4'},
    {'name': 'Research/All noisy HS/Y HS 90%/90_Y_Elbow_Twist_Self22.mp4', 'path': 'Research/All noisy HS/Y HS 90%/90_Y_Elbow_Twist_Self22.mp4'},
    {'name': 'Research/All noisy HS/A HS 90%/90_A_Mouth_Twist_Forward13.mp4', 'path': 'Research/All noisy HS/A HS 90%/90_A_Mouth_Twist_Forward13.mp4'},
    {'name': 'Research/All noisy HS/G HS 90%/90_G_Neutral_Twist_Down3.mp4', 'path': 'Research/All noisy HS/G HS 90%/90_G_Neutral_Twist_Down3.mp4'},
    {'name': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Neutral_Lateral_Self9.mp4', 'path': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Neutral_Lateral_Self9.mp4'},
    {'name': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Mouth_Twist_Forward10.mp4', 'path': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Mouth_Twist_Forward10.mp4'},
    {'name': 'Research/All noisy HS/F HS 90%/90_F_Mouth_Twist_Down13.mp4', 'path': 'Research/All noisy HS/F HS 90%/90_F_Mouth_Twist_Down13.mp4'},
    {'name': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Elbow_Lateral_Forward26.mp4', 'path': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Elbow_Lateral_Forward26.mp4'},
    {'name': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Mouth_Circle_Down15.mp4', 'path': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Mouth_Circle_Down15.mp4'},
    {'name': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Elbow_Lateral_Down27.mp4', 'path': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Elbow_Lateral_Down27.mp4'},
    {'name': 'Research/All noisy HS/S HS 90%/90_S_Elbow_Circle_Self24.mp4', 'path': 'Research/All noisy HS/S HS 90%/90_S_Elbow_Circle_Self24.mp4'},
    {'name': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Mouth_Circle_Down15.mp4', 'path': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Mouth_Circle_Down15.mp4'},
    {'name': 'Research/All noisy HS/8 HS 90%/90_8_Elbow_Twist_Down22.mp4', 'path': 'Research/All noisy HS/8 HS 90%/90_8_Elbow_Twist_Down22.mp4'},
    {'name': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Neutral_Lateral_Forward7.mp4', 'path': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Neutral_Lateral_Forward7.mp4'},
    {'name': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Mouth_Twist_Down12.mp4', 'path': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Mouth_Twist_Down12.mp4'},
    {'name': 'Research/All noisy HS/10 HS 90%/90_10_Neutral_Twist_Down3.mp4', 'path': 'Research/All noisy HS/10 HS 90%/90_10_Neutral_Twist_Down3.mp4'},
    {'name': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Elbow_Circle_Down24.mp4', 'path': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Elbow_Circle_Down24.mp4'},
    {'name': 'Research/All noisy HS/X HS 90%/90_X_Neutral_Lateral_Forward7.mp4', 'path': 'Research/All noisy HS/X HS 90%/90_X_Neutral_Lateral_Forward7.mp4'},
    {'name': 'Research/All noisy HS/E HS 90%/90_E_Elbow_Lateral_Down27.mp4', 'path': 'Research/All noisy HS/E HS 90%/90_E_Elbow_Lateral_Down27.mp4'},
    {'name': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Neutral_Twist_Forward1.mp4', 'path': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Neutral_Twist_Forward1.mp4'},
    {'name': 'Research/All noisy HS/i HS 90%/90_I_Elbow_Twist_Self23.mp4', 'path': 'Research/All noisy HS/i HS 90%/90_I_Elbow_Twist_Self23.mp4'},
    {'name': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Mouth_Twist_Down12.mp4', 'path': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Mouth_Twist_Down12.mp4'},
    {'name': 'Research/All noisy HS/10 HS 90%/90_10_Mouth_Twist_Down14.mp4', 'path': 'Research/All noisy HS/10 HS 90%/90_10_Mouth_Twist_Down14.mp4'},
    {'name': 'Research/All noisy HS/O HS 90%/90_O_Neutral_Twist_Self3.mp4', 'path': 'Research/All noisy HS/O HS 90%/90_O_Neutral_Twist_Self3.mp4'},
    {'name': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Elbow_Twist_Self20.mp4', 'path': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Elbow_Twist_Self20.mp4'},
    {'name': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Mouth_Twist_Self12.mp4', 'path': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Mouth_Twist_Self12.mp4'},
    {'name': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Neutral_Twist_Self3.mp4', 'path': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Neutral_Twist_Self3.mp4'},
    {'name': 'Research/All noisy HS/R HS 90%/90_R_Mouth_Twist_Self13.mp4', 'path': 'Research/All noisy HS/R HS 90%/90_R_Mouth_Twist_Self13.mp4'},
    {'name': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Neutral_Twist_Self2.mp4', 'path': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Neutral_Twist_Self2.mp4'},
    {'name': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Mouth_Lateral_Self17.mp4', 'path': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Mouth_Lateral_Self17.mp4'},
    {'name': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Mouth_Twist_Down12.mp4', 'path': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Mouth_Twist_Down12.mp4'},
    {'name': 'Research/All noisy HS/K HS 90%/90_K_Elbow_Circle_Forward24.mp4', 'path': 'Research/All noisy HS/K HS 90%/90_K_Elbow_Circle_Forward24.mp4'},
    {'name': 'Research/All noisy HS/i HS 90%/90_I_Mouth_Circle_Down18.mp4', 'path': 'Research/All noisy HS/i HS 90%/90_I_Mouth_Circle_Down18.mp4'},
    {'name': 'Research/All noisy HS/S HS 90%/90_S_Neutral_Circle_Self5.mp4', 'path': 'Research/All noisy HS/S HS 90%/90_S_Neutral_Circle_Self5.mp4'},
    {'name': 'Research/All noisy HS/R HS 90%/90_R_Elbow_Circle_Down28.mp4', 'path': 'Research/All noisy HS/R HS 90%/90_R_Elbow_Circle_Down28.mp4'},
    {'name': 'Research/All noisy HS/W HS 90%/90_W_Mouth_Twist_Forward11.mp4', 'path': 'Research/All noisy HS/W HS 90%/90_W_Mouth_Twist_Forward11.mp4'},
    {'name': 'Research/All noisy HS/Y HS 90%/90_Y_Mouth_Circle_Self16.mp4', 'path': 'Research/All noisy HS/Y HS 90%/90_Y_Mouth_Circle_Self16.mp4'},
    {'name': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Mouth_Twist_Forward10.mp4', 'path': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Mouth_Twist_Forward10.mp4'},
    {'name': 'Research/All noisy HS/X HS 90%/90_X_Neutral_Lateral_Down9.mp4', 'path': 'Research/All noisy HS/X HS 90%/90_X_Neutral_Lateral_Down9.mp4'},
    {'name': 'Research/All noisy HS/A HS 90%/90_A_Elbow_Circle_Self26.mp4', 'path': 'Research/All noisy HS/A HS 90%/90_A_Elbow_Circle_Self26.mp4'},
    {'name': 'Research/All noisy HS/K HS 90%/90_K_Mouth_Circle_Forward15.mp4', 'path': 'Research/All noisy HS/K HS 90%/90_K_Mouth_Circle_Forward15.mp4'},
    {'name': 'Research/All noisy HS/X HS 90%/90_X_Neutral_Lateral_Self8.mp4', 'path': 'Research/All noisy HS/X HS 90%/90_X_Neutral_Lateral_Self8.mp4'},
    {'name': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Neutral_Circle_Down6.mp4', 'path': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Neutral_Circle_Down6.mp4'},
    {'name': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Elbow_Circle_Down25.mp4', 'path': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Elbow_Circle_Down25.mp4'},
    {'name': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Neutral_Lateral_Self8.mp4', 'path': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Neutral_Lateral_Self8.mp4'},
    {'name': 'Research/All noisy HS/4 HS 90%/90_4_Neutral_Lateral_Self8.mp4', 'path': 'Research/All noisy HS/4 HS 90%/90_4_Neutral_Lateral_Self8.mp4'},
    {'name': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Neutral_Twist_Self2.mp4', 'path': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Neutral_Twist_Self2.mp4'},
    {'name': 'Research/All noisy HS/A HS 90%/90_A_Neutral_Lateral_Forward7.mp4', 'path': 'Research/All noisy HS/A HS 90%/90_A_Neutral_Lateral_Forward7.mp4'},
    {'name': 'Research/All noisy HS/Y HS 90%/90_Y_Elbow_Circle_Forward24.mp4', 'path': 'Research/All noisy HS/Y HS 90%/90_Y_Elbow_Circle_Forward24.mp4'},
    {'name': 'Research/All noisy HS/V HS 90%/90_V_Elbow_Twist_Forward22.mp4', 'path': 'Research/All noisy HS/V HS 90%/90_V_Elbow_Twist_Forward22.mp4'},
    {'name': 'Research/All noisy HS/A HS 90%/90_A_Mouth_Lateral_Forward19.mp4', 'path': 'Research/All noisy HS/A HS 90%/90_A_Mouth_Lateral_Forward19.mp4'},
    {'name': 'Research/All noisy HS/8 HS 90%/90_8_Elbow_Lateral_Down28.mp4', 'path': 'Research/All noisy HS/8 HS 90%/90_8_Elbow_Lateral_Down28.mp4'},
    {'name': 'Research/All noisy HS/V HS 90%/90_V_Mouth_Lateral_Forward19.mp4', 'path': 'Research/All noisy HS/V HS 90%/90_V_Mouth_Lateral_Forward19.mp4'},
    {'name': 'Research/All noisy HS/X HS 90%/90_X_Neutral_Circle_Down6.mp4', 'path': 'Research/All noisy HS/X HS 90%/90_X_Neutral_Circle_Down6.mp4'},
    {'name': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Mouth_Circle_Self15.mp4', 'path': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Mouth_Circle_Self15.mp4'},
    {'name': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Elbow_Twist_Self21.mp4', 'path': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Elbow_Twist_Self21.mp4'},
    {'name': 'Research/All noisy HS/10 HS 90%/90_10_Elbow_Lateral_Self29.mp4', 'path': 'Research/All noisy HS/10 HS 90%/90_10_Elbow_Lateral_Self29.mp4'},
    {'name': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Neutral_Circle_Self5.mp4', 'path': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Neutral_Circle_Self5.mp4'},
    {'name': 'Research/All noisy HS/3 HS 90%/90_3_Neutral_Circle_Forward4.mp4', 'path': 'Research/All noisy HS/3 HS 90%/90_3_Neutral_Circle_Forward4.mp4'},
    {'name': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Mouth_Lateral_Down19.mp4', 'path': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Mouth_Lateral_Down19.mp4'},
    {'name': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Mouth_Twist_Self11.mp4', 'path': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Mouth_Twist_Self11.mp4'},
    {'name': 'Research/All noisy HS/A HS 90%/90_A_Neutral_Lateral_Down2.mp4', 'path': 'Research/All noisy HS/A HS 90%/90_A_Neutral_Lateral_Down2.mp4'},
    {'name': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Mouth_Twist_Self12.mp4', 'path': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Mouth_Twist_Self12.mp4'},
    {'name': 'Research/All noisy HS/Y HS 90%/90_Y_Elbow_Lateral_Forward27.mp4', 'path': 'Research/All noisy HS/Y HS 90%/90_Y_Elbow_Lateral_Forward27.mp4'},
    {'name': 'Research/All noisy HS/G HS 90%/90_G_Elbow_Lateral_Down29.mp4', 'path': 'Research/All noisy HS/G HS 90%/90_G_Elbow_Lateral_Down29.mp4'},
    {'name': 'Research/All noisy HS/S HS 90%/90_S_Mouth_Twist_Down12.mp4', 'path': 'Research/All noisy HS/S HS 90%/90_S_Mouth_Twist_Down12.mp4'},
    {'name': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Neutral_Lateral_Down9.mp4', 'path': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Neutral_Lateral_Down9.mp4'},
    {'name': 'Research/All noisy HS/S HS 90%/90_S_Elbow_Circle_Forward23.mp4', 'path': 'Research/All noisy HS/S HS 90%/90_S_Elbow_Circle_Forward23.mp4'},
    {'name': 'Research/All noisy HS/E HS 90%/90_E_Mouth_Twist_Down12.mp4', 'path': 'Research/All noisy HS/E HS 90%/90_E_Mouth_Twist_Down12.mp4'},
    {'name': 'Research/All noisy HS/A HS 90%/90_A_Mouth_Lateral_Down21.mp4', 'path': 'Research/All noisy HS/A HS 90%/90_A_Mouth_Lateral_Down21.mp4'},
    {'name': 'Research/All noisy HS/R HS 90%/90_R_Elbow_Lateral_Forward29.mp4', 'path': 'Research/All noisy HS/R HS 90%/90_R_Elbow_Lateral_Forward29.mp4'},
    {'name': 'Research/All noisy HS/B HS 90%/90_B_Neutral_Circle_Down7.mp4', 'path': 'Research/All noisy HS/B HS 90%/90_B_Neutral_Circle_Down7.mp4'},
    {'name': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Elbow_Twist_Down22.mp4', 'path': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Elbow_Twist_Down22.mp4'},
    {'name': 'Research/All noisy HS/U HS 90%/90_U_Elbow_Circle_Forward25.mp4', 'path': 'Research/All noisy HS/U HS 90%/90_U_Elbow_Circle_Forward25.mp4'},
    {'name': 'Research/All noisy HS/8 HS 90%/90_8_Neutral_Circle_Self6.mp4', 'path': 'Research/All noisy HS/8 HS 90%/90_8_Neutral_Circle_Self6.mp4'},
    {'name': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Neutral_Lateral_Down9.mp4', 'path': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Neutral_Lateral_Down9.mp4'},
    {'name': 'Research/All noisy HS/i HS 90%/90_I_Neutral_Circle_Down7.mp4', 'path': 'Research/All noisy HS/i HS 90%/90_I_Neutral_Circle_Down7.mp4'},
    {'name': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Mouth_Lateral_Self17.mp4', 'path': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Mouth_Lateral_Self17.mp4'},
    {'name': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Neutral_Twist_Forward5.mp4', 'path': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Neutral_Twist_Forward5.mp4'},
    {'name': 'Research/All noisy HS/V HS 90%/90_V_Neutral_Lateral_Self11.mp4', 'path': 'Research/All noisy HS/V HS 90%/90_V_Neutral_Lateral_Self11.mp4'},
    {'name': 'Research/All noisy HS/L HS 90%/90_L_Mouth_Lateral_Down18.mp4', 'path': 'Research/All noisy HS/L HS 90%/90_L_Mouth_Lateral_Down18.mp4'},
    {'name': 'Research/All noisy HS/5 HS 90%/90_5_Neutral_Lateral_Down9.mp4', 'path': 'Research/All noisy HS/5 HS 90%/90_5_Neutral_Lateral_Down9.mp4'},
    {'name': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Mouth_Lateral_Forward1.mp4', 'path': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Mouth_Lateral_Forward1.mp4'},
    {'name': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Neutral_Lateral_Forward7.mp4', 'path': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Neutral_Lateral_Forward7.mp4'},
    {'name': 'Research/All noisy HS/D HS 90%/90_D_Neutral_Circle_Down6.mp4', 'path': 'Research/All noisy HS/D HS 90%/90_D_Neutral_Circle_Down6.mp4'},
    {'name': 'Research/All noisy HS/L HS 90%/90_L_Neutral_Lateral_Down9.mp4', 'path': 'Research/All noisy HS/L HS 90%/90_L_Neutral_Lateral_Down9.mp4'},
    {'name': 'Research/All noisy HS/E HS 90%/90_E_Elbow_Circle_Forward22.mp4', 'path': 'Research/All noisy HS/E HS 90%/90_E_Elbow_Circle_Forward22.mp4'},
    {'name': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Mouth_Twist_Forward11.mp4', 'path': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Mouth_Twist_Forward11.mp4'},
    {'name': 'Research/All noisy HS/X HS 90%/90_X_Mouth_Lateral_Down18.mp4', 'path': 'Research/All noisy HS/X HS 90%/90_X_Mouth_Lateral_Down18.mp4'},
    {'name': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Mouth_Lateral_Self2.mp4', 'path': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Mouth_Lateral_Self2.mp4'},
    {'name': 'Research/All noisy HS/i HS 90%/90_I_Mouth_Circle_Self16.mp4', 'path': 'Research/All noisy HS/i HS 90%/90_I_Mouth_Circle_Self16.mp4'},
    {'name': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Elbow_Twist_Self20.mp4', 'path': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Elbow_Twist_Self20.mp4'},
    {'name': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Elbow_Circle_Self24.mp4', 'path': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Elbow_Circle_Self24.mp4'},
    {'name': 'Research/All noisy HS/Y HS 90%/90_Y_Mouth_Circle_Down17.mp4', 'path': 'Research/All noisy HS/Y HS 90%/90_Y_Mouth_Circle_Down17.mp4'},
    {'name': 'Research/All noisy HS/D HS 90%/90_D_Elbow_Twist_Down21.mp4', 'path': 'Research/All noisy HS/D HS 90%/90_D_Elbow_Twist_Down21.mp4'},
    {'name': 'Research/All noisy HS/G HS 90%/90_G_Mouth_Circle_Self14.mp4', 'path': 'Research/All noisy HS/G HS 90%/90_G_Mouth_Circle_Self14.mp4'},
    {'name': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Neutral_Lateral_Down.mp4', 'path': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Neutral_Lateral_Down.mp4'},
    {'name': 'Research/All noisy HS/1 HS 90%/90_1_Elbow_Lateral_Self26.mp4', 'path': 'Research/All noisy HS/1 HS 90%/90_1_Elbow_Lateral_Self26.mp4'},
    {'name': 'Research/All noisy HS/5 HS 90%/90_5_Neutral_Circle_Forward4.mp4', 'path': 'Research/All noisy HS/5 HS 90%/90_5_Neutral_Circle_Forward4.mp4'},
    {'name': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Elbow_Twist_Self22.mp4', 'path': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Elbow_Twist_Self22.mp4'},
    {'name': 'Research/All noisy HS/C HS 90%/90_C_Elbow_Twist_Down21.mp4', 'path': 'Research/All noisy HS/C HS 90%/90_C_Elbow_Twist_Down21.mp4'},
    {'name': 'Research/All noisy HS/i HS 90%/90_I_Elbow_Circle_Forward25.mp4', 'path': 'Research/All noisy HS/i HS 90%/90_I_Elbow_Circle_Forward25.mp4'},
    {'name': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Neutral_Circle_Forward1.mp4', 'path': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Neutral_Circle_Forward1.mp4'},
    {'name': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Neutral_Lateral_Forward7.mp4', 'path': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Neutral_Lateral_Forward7.mp4'},
    {'name': 'Research/All noisy HS/X HS 90%/90_X_Mouth_Twist_Forward10.mp4', 'path': 'Research/All noisy HS/X HS 90%/90_X_Mouth_Twist_Forward10.mp4'},
    {'name': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Elbow_Lateral_Forward22.mp4', 'path': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Elbow_Lateral_Forward22.mp4'},
    {'name': 'Research/All noisy HS/F HS 90%/90_F_Neutral_Twist_Self2.mp4', 'path': 'Research/All noisy HS/F HS 90%/90_F_Neutral_Twist_Self2.mp4'},
    {'name': 'Research/All noisy HS/i HS 90%/90_I_Elbow_Twist_Down24.mp4', 'path': 'Research/All noisy HS/i HS 90%/90_I_Elbow_Twist_Down24.mp4'},
    {'name': 'Research/All noisy HS/C HS 90%/90_C_Neutral_Twist_Down3.mp4', 'path': 'Research/All noisy HS/C HS 90%/90_C_Neutral_Twist_Down3.mp4'},
    {'name': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Neutral_Twist_Forward1.mp4', 'path': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Neutral_Twist_Forward1.mp4'},
    {'name': 'Research/All noisy HS/E HS 90%/90_E_Neutral_Circle_Down6.mp4', 'path': 'Research/All noisy HS/E HS 90%/90_E_Neutral_Circle_Down6.mp4'},
    {'name': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Mouth_Lateral_Down18.mp4', 'path': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Mouth_Lateral_Down18.mp4'},
    {'name': 'Research/All noisy HS/K HS 90%/90_K_Neutral_Circle_Self6.mp4', 'path': 'Research/All noisy HS/K HS 90%/90_K_Neutral_Circle_Self6.mp4'},
    {'name': 'Research/All noisy HS/1 HS 90%/90_1_Neutral_Circle_Forward4.mp4', 'path': 'Research/All noisy HS/1 HS 90%/90_1_Neutral_Circle_Forward4.mp4'},
    {'name': 'Research/All noisy HS/1 HS 90%/90_1_Neutral_Twist_Down3.mp4', 'path': 'Research/All noisy HS/1 HS 90%/90_1_Neutral_Twist_Down3.mp4'},
    {'name': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Elbow_Lateral_Down29.mp4', 'path': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Elbow_Lateral_Down29.mp4'},
    {'name': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Elbow_Twist_Down22.mp4', 'path': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Elbow_Twist_Down22.mp4'},
    {'name': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Mouth_Circle_Self14.mp4', 'path': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Mouth_Circle_Self14.mp4'},
    {'name': 'Research/All noisy HS/E HS 90%/90_E_Neutral_Lateral_Forward7.mp4', 'path': 'Research/All noisy HS/E HS 90%/90_E_Neutral_Lateral_Forward7.mp4'},
    {'name': 'Research/All noisy HS/S HS 90%/90_S_Elbow_Twist_Down22.mp4', 'path': 'Research/All noisy HS/S HS 90%/90_S_Elbow_Twist_Down22.mp4'},
    {'name': 'Research/All noisy HS/C HS 90%/90_C_Mouth_Lateral_Down18.mp4', 'path': 'Research/All noisy HS/C HS 90%/90_C_Mouth_Lateral_Down18.mp4'},
    {'name': 'Research/All noisy HS/Y HS 90%/90_Y_Neutral_Circle_Self7.mp4', 'path': 'Research/All noisy HS/Y HS 90%/90_Y_Neutral_Circle_Self7.mp4'},
    {'name': 'Research/All noisy HS/C HS 90%/90_C_Mouth_Lateral_Self17.mp4', 'path': 'Research/All noisy HS/C HS 90%/90_C_Mouth_Lateral_Self17.mp4'},
    {'name': 'Research/All noisy HS/5 HS 90%/90_5_Elbow_Lateral_Self26.mp4', 'path': 'Research/All noisy HS/5 HS 90%/90_5_Elbow_Lateral_Self26.mp4'},
    {'name': 'Research/All noisy HS/10 HS 90%/90_10_Neutral_Circle_Down7.mp4', 'path': 'Research/All noisy HS/10 HS 90%/90_10_Neutral_Circle_Down7.mp4'},
    {'name': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Elbow_Lateral_Down27.mp4', 'path': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Elbow_Lateral_Down27.mp4'},
    {'name': 'Research/All noisy HS/L HS 90%/90_L_Mouth_Circle_Down15.mp4', 'path': 'Research/All noisy HS/L HS 90%/90_L_Mouth_Circle_Down15.mp4'},
    {'name': 'Research/All noisy HS/4 HS 90%/90_4_Mouth_Lateral_Down18.mp4', 'path': 'Research/All noisy HS/4 HS 90%/90_4_Mouth_Lateral_Down18.mp4'},
    {'name': 'Research/All noisy HS/5 HS 90%/90_5_Elbow_Lateral_Forward25.mp4', 'path': 'Research/All noisy HS/5 HS 90%/90_5_Elbow_Lateral_Forward25.mp4'},
    {'name': 'Research/All noisy HS/B HS 90%/90_B_Elbow_Lateral_Forward24.mp4', 'path': 'Research/All noisy HS/B HS 90%/90_B_Elbow_Lateral_Forward24.mp4'},
    {'name': 'Research/All noisy HS/A HS 90%/90_A_Neutral_Twist_Self5.mp4', 'path': 'Research/All noisy HS/A HS 90%/90_A_Neutral_Twist_Self5.mp4'},
    {'name': 'Research/All noisy HS/B HS 90%/90_B_Neutral_Circle_Self5.mp4', 'path': 'Research/All noisy HS/B HS 90%/90_B_Neutral_Circle_Self5.mp4'},
    {'name': 'Research/All noisy HS/S HS 90%/90_S_Mouth_Lateral_Self17.mp4', 'path': 'Research/All noisy HS/S HS 90%/90_S_Mouth_Lateral_Self17.mp4'},
    {'name': 'Research/All noisy HS/R HS 90%/90_R_Neutral_Circle_Forward6.mp4', 'path': 'Research/All noisy HS/R HS 90%/90_R_Neutral_Circle_Forward6.mp4'},
    {'name': 'Research/All noisy HS/O HS 90%/90_O_Elbow_Lateral_Down29.mp4', 'path': 'Research/All noisy HS/O HS 90%/90_O_Elbow_Lateral_Down29.mp4'},
    {'name': 'Research/All noisy HS/5 HS 90%/90_5_Elbow_Circle_Forward22.mp4', 'path': 'Research/All noisy HS/5 HS 90%/90_5_Elbow_Circle_Forward22.mp4'},
    {'name': 'Research/All noisy HS/K HS 90%/90_K_Neutral_Circle_Down7.mp4', 'path': 'Research/All noisy HS/K HS 90%/90_K_Neutral_Circle_Down7.mp4'},
    {'name': 'Research/Excel books/Part 2.xlsx', 'path': 'Research/Excel books/Part 2.xlsx'},
    {'name': 'Research/All noisy HS/8 HS 90%/90_8_Mouth_Lateral_Down19.mp4', 'path': 'Research/All noisy HS/8 HS 90%/90_8_Mouth_Lateral_Down19.mp4'},
    {'name': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Mouth_Lateral_Down18.mp4', 'path': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Mouth_Lateral_Down18.mp4'},
    {'name': 'Research/All noisy HS/O HS 90%/90_O_Mouth_Lateral_Self19.mp4', 'path': 'Research/All noisy HS/O HS 90%/90_O_Mouth_Lateral_Self19.mp4'},
    {'name': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Mouth_Lateral_Self17.mp4', 'path': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Mouth_Lateral_Self17.mp4'},
    {'name': 'Research/All noisy HS/8 HS 90%/90_8_Elbow_Twist_Forward20.mp4', 'path': 'Research/All noisy HS/8 HS 90%/90_8_Elbow_Twist_Forward20.mp4'},
    {'name': 'Research/All noisy HS/K HS 90%/90_K_Mouth_Twist_Forward12.mp4', 'path': 'Research/All noisy HS/K HS 90%/90_K_Mouth_Twist_Forward12.mp4'},
    {'name': 'Research/All noisy HS/C HS 90%/90_C_Neutral_Twist_Forward1.mp4', 'path': 'Research/All noisy HS/C HS 90%/90_C_Neutral_Twist_Forward1.mp4'},
    {'name': 'Research/All noisy HS/E HS 90%/90_E_Mouth_Circle_Down15.mp4', 'path': 'Research/All noisy HS/E HS 90%/90_E_Mouth_Circle_Down15.mp4'},
    {'name': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Mouth_Circle_Self14.mp4', 'path': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Mouth_Circle_Self14.mp4'},
    {'name': 'Research/All noisy HS/U HS 90%/90_U_Elbow_Twist_Self23.mp4', 'path': 'Research/All noisy HS/U HS 90%/90_U_Elbow_Twist_Self23.mp4'},
    {'name': 'Research/All noisy HS/Y HS 90%/90_Y_Mouth_Twist_Self13.mp4', 'path': 'Research/All noisy HS/Y HS 90%/90_Y_Mouth_Twist_Self13.mp4'},
    {'name': 'Research/All noisy HS/O HS 90%/90_O_Elbow_Twist_Self22.mp4', 'path': 'Research/All noisy HS/O HS 90%/90_O_Elbow_Twist_Self22.mp4'},
    {'name': 'Research/All noisy HS/1 HS 90%/90_1_Mouth_Twist_Forward10.mp4', 'path': 'Research/All noisy HS/1 HS 90%/90_1_Mouth_Twist_Forward10.mp4'},
    {'name': 'Research/All noisy HS/G HS 90%/90_G_Elbow_Circle_Self25.mp4', 'path': 'Research/All noisy HS/G HS 90%/90_G_Elbow_Circle_Self25.mp4'},
    {'name': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Neutral_Twist_Self2.mp4', 'path': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Neutral_Twist_Self2.mp4'},
    {'name': 'Research/All noisy HS/B HS 90%/90_B_Elbow_Lateral_Self25.mp4', 'path': 'Research/All noisy HS/B HS 90%/90_B_Elbow_Lateral_Self25.mp4'},
    {'name': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Neutral_Circle_Down6.mp4', 'path': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Neutral_Circle_Down6.mp4'},
    {'name': 'Research/All noisy HS/4 HS 90%/90_4_Elbow_Twist_Down21.mp4', 'path': 'Research/All noisy HS/4 HS 90%/90_4_Elbow_Twist_Down21.mp4'},
    {'name': 'Research/All noisy HS/U HS 90%/90_U_Neutral_Circle_Down6.mp4', 'path': 'Research/All noisy HS/U HS 90%/90_U_Neutral_Circle_Down6.mp4'},
    {'name': 'Research/All noisy HS/W HS 90%/90_W_Mouth_Lateral_Down19.mp4', 'path': 'Research/All noisy HS/W HS 90%/90_W_Mouth_Lateral_Down19.mp4'},
    {'name': 'Research/All noisy HS/W HS 90%/90_W_Neutral_Circle_Self6.mp4', 'path': 'Research/All noisy HS/W HS 90%/90_W_Neutral_Circle_Self6.mp4'},
    {'name': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Elbow_Circle_Self23.mp4', 'path': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Elbow_Circle_Self23.mp4'},
    {'name': 'Research/All noisy HS/4 HS 90%/90_4_Elbow_Lateral_Self26.mp4', 'path': 'Research/All noisy HS/4 HS 90%/90_4_Elbow_Lateral_Self26.mp4'},
    {'name': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Neutral_Lateral_Down9.mp4', 'path': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Neutral_Lateral_Down9.mp4'},
    {'name': 'Research/All noisy HS/D HS 90%/90_D_Mouth_Lateral_Down18.mp4', 'path': 'Research/All noisy HS/D HS 90%/90_D_Mouth_Lateral_Down18.mp4'},
    {'name': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Elbow_Circle_Down24.mp4', 'path': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Elbow_Circle_Down24.mp4'},
    {'name': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Mouth_Twist_Self12.mp4', 'path': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Mouth_Twist_Self12.mp4'},
    {'name': 'Research/All noisy HS/4 HS 90%/90_4_Neutral_Lateral_Down9.mp4', 'path': 'Research/All noisy HS/4 HS 90%/90_4_Neutral_Lateral_Down9.mp4'},
    {'name': 'Research/All noisy HS/A HS 90%/90_A_Mouth_Lateral_Self20.mp4', 'path': 'Research/All noisy HS/A HS 90%/90_A_Mouth_Lateral_Self20.mp4'},
    {'name': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Mouth_Twist_Down13.mp4', 'path': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Mouth_Twist_Down13.mp4'},
    {'name': 'Research/All noisy HS/K HS 90%/90_K_Elbow_Twist_Forward21.mp4', 'path': 'Research/All noisy HS/K HS 90%/90_K_Elbow_Twist_Forward21.mp4'},
    {'name': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Neutral_Circle_Forward4.mp4', 'path': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Neutral_Circle_Forward4.mp4'},
    {'name': 'Research/All noisy HS/S HS 90%/90_S_Neutral_Twist_Down3.mp4', 'path': 'Research/All noisy HS/S HS 90%/90_S_Neutral_Twist_Down3.mp4'},
    {'name': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Mouth_Lateral_Down18.mp4', 'path': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Mouth_Lateral_Down18.mp4'},
    {'name': 'Research/All noisy HS/E HS 90%/90_E_Elbow_Circle_Down24.mp4', 'path': 'Research/All noisy HS/E HS 90%/90_E_Elbow_Circle_Down24.mp4'},
    {'name': 'Research/All noisy HS/C HS 90%/90_C_Elbow_Lateral_Forward25.mp4', 'path': 'Research/All noisy HS/C HS 90%/90_C_Elbow_Lateral_Forward25.mp4'},
    {'name': 'Research/All noisy HS/R HS 90%/90_R_Neutral_Twist_Self3.mp4', 'path': 'Research/All noisy HS/R HS 90%/90_R_Neutral_Twist_Self3.mp4'},
    {'name': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Neutral_Lateral_Forward8.mp4', 'path': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Neutral_Lateral_Forward8.mp4'},
    {'name': 'Research/All noisy HS/S HS 90%/90_S_Mouth_Lateral_Forward16.mp4', 'path': 'Research/All noisy HS/S HS 90%/90_S_Mouth_Lateral_Forward16.mp4'},
    {'name': 'Research/All noisy HS/1 HS 90%/90_1_Neutral_Lateral_Self8.mp4', 'path': 'Research/All noisy HS/1 HS 90%/90_1_Neutral_Lateral_Self8.mp4'},
    {'name': 'Research/All noisy HS/K HS 90%/90_K_Neutral_Twist_Self2.mp4', 'path': 'Research/All noisy HS/K HS 90%/90_K_Neutral_Twist_Self2.mp4'},
    {'name': 'Research/All noisy HS/E HS 90%/90_E_Mouth_Lateral_Down18.mp4', 'path': 'Research/All noisy HS/E HS 90%/90_E_Mouth_Lateral_Down18.mp4'},
    {'name': 'Research/All noisy HS/G HS 90%/90_G_Mouth_Circle_Down15.mp4', 'path': 'Research/All noisy HS/G HS 90%/90_G_Mouth_Circle_Down15.mp4'},
    {'name': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Neutral_Twist_Down3.mp4', 'path': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Neutral_Twist_Down3.mp4'},
    {'name': 'Research/All noisy HS/i HS 90%/90_I_Mouth_Twist_Self13.mp4', 'path': 'Research/All noisy HS/i HS 90%/90_I_Mouth_Twist_Self13.mp4'},
    {'name': 'Research/All noisy HS/E HS 90%/90_E_Elbow_Lateral_Forward25.mp4', 'path': 'Research/All noisy HS/E HS 90%/90_E_Elbow_Lateral_Forward25.mp4'},
    {'name': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Elbow_Twist_Forward19.mp4', 'path': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Elbow_Twist_Forward19.mp4'},
    {'name': 'Research/All noisy HS/W HS 90%/90_W_Elbow_Twist_Forward20.mp4', 'path': 'Research/All noisy HS/W HS 90%/90_W_Elbow_Twist_Forward20.mp4'},
    {'name': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Neutral_Circle_Forward4.mp4', 'path': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Neutral_Circle_Forward4.mp4'},
    {'name': 'Research/All noisy HS/X HS 90%/90_X_Mouth_Twist_Self11.mp4', 'path': 'Research/All noisy HS/X HS 90%/90_X_Mouth_Twist_Self11.mp4'},
    {'name': 'Research/All noisy HS/Y HS 90%/90_Y_Mouth_Twist_Down14.mp4', 'path': 'Research/All noisy HS/Y HS 90%/90_Y_Mouth_Twist_Down14.mp4'},
    {'name': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Mouth_Circle_Self14.mp4', 'path': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Mouth_Circle_Self14.mp4'},
    {'name': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Mouth_Twsit_Down12.mp4', 'path': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Mouth_Twsit_Down12.mp4'},
    {'name': 'Research/All noisy HS/3 HS 90%/90_3_Mouth_Lateral_Self17.mp4', 'path': 'Research/All noisy HS/3 HS 90%/90_3_Mouth_Lateral_Self17.mp4'},
    {'name': 'Research/All noisy HS/Y HS 90%/90_Y_Elbow_Circle_Self25.mp4', 'path': 'Research/All noisy HS/Y HS 90%/90_Y_Elbow_Circle_Self25.mp4'},
    {'name': 'Research/All noisy HS/K HS 90%/90_K_Mouth_Twist_Down14.mp4', 'path': 'Research/All noisy HS/K HS 90%/90_K_Mouth_Twist_Down14.mp4'},
    {'name': 'Research/All noisy HS/X HS 90%/90_X_Mouth_Circle_Down15.mp4', 'path': 'Research/All noisy HS/X HS 90%/90_X_Mouth_Circle_Down15.mp4'},
    {'name': 'Research/All noisy HS/10 HS 90%/90_10_Elbow_Lateral_Forward28.mp4', 'path': 'Research/All noisy HS/10 HS 90%/90_10_Elbow_Lateral_Forward28.mp4'},
    {'name': 'Research/All noisy HS/1 HS 90%/90_1_Elbow_Lateral_Down27.mp4', 'path': 'Research/All noisy HS/1 HS 90%/90_1_Elbow_Lateral_Down27.mp4'},
    {'name': 'Research/All noisy HS/8 HS 90%/90_8_Neutral_Lateral_Forward8.mp4', 'path': 'Research/All noisy HS/8 HS 90%/90_8_Neutral_Lateral_Forward8.mp4'},
    {'name': 'Research/All noisy HS/10 HS 90%/90_10_Neutral_Lateral_Forward10.mp4', 'path': 'Research/All noisy HS/10 HS 90%/90_10_Neutral_Lateral_Forward10.mp4'},
    {'name': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Elbow_Circle_Self24.mp4', 'path': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Elbow_Circle_Self24.mp4'},
    {'name': 'Research/All noisy HS/D HS 90%/90_D_Mouth_Twist_Self11.mp4', 'path': 'Research/All noisy HS/D HS 90%/90_D_Mouth_Twist_Self11.mp4'},
    {'name': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Neutral_Twist_Down3.mp4', 'path': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Neutral_Twist_Down3.mp4'},
    {'name': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Elbow_Twist_Down21.mp4', 'path': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Elbow_Twist_Down21.mp4'},
    {'name': 'Research/All noisy HS/G HS 90%/90_G_Neutral_Circle_Down6.mp4', 'path': 'Research/All noisy HS/G HS 90%/90_G_Neutral_Circle_Down6.mp4'},
    {'name': 'Research/All noisy HS/F HS 90%/90_F_Mouth_Circle_Self15.mp4', 'path': 'Research/All noisy HS/F HS 90%/90_F_Mouth_Circle_Self15.mp4'},
    {'name': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Neutral_Twist_Forward1.mp4', 'path': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Neutral_Twist_Forward1.mp4'},
    {'name': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Neutral_Circle_Down6.mp4', 'path': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Neutral_Circle_Down6.mp4'},
    {'name': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Neutral_Circle_Down7.mp4', 'path': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Neutral_Circle_Down7.mp4'},
    {'name': 'Research/All noisy HS/B HS 90%/90_B_Mouth_Lateral_Down20.mp4', 'path': 'Research/All noisy HS/B HS 90%/90_B_Mouth_Lateral_Down20.mp4'},
    {'name': 'Research/All noisy HS/U HS 90%/90_U_Mouth_Twist_Self11.mp4', 'path': 'Research/All noisy HS/U HS 90%/90_U_Mouth_Twist_Self11.mp4'},
    {'name': 'Research/All noisy HS/R HS 90%/90_R_Elbow_Twist_Down25.mp4', 'path': 'Research/All noisy HS/R HS 90%/90_R_Elbow_Twist_Down25.mp4'},
    {'name': 'Research/All noisy HS/V HS 90%/90_V_Neutral_Circle_Self7.mp4', 'path': 'Research/All noisy HS/V HS 90%/90_V_Neutral_Circle_Self7.mp4'},
    {'name': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Mouth_Circle_Forward13.mp4', 'path': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Mouth_Circle_Forward13.mp4'},
    {'name': 'Research/All noisy HS/10 HS 90%/90_10_Mouth_Twist_Forward12.mp4', 'path': 'Research/All noisy HS/10 HS 90%/90_10_Mouth_Twist_Forward12.mp4'},
    {'name': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Mouth_Twist_Forward10.mp4', 'path': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Mouth_Twist_Forward10.mp4'},
    {'name': 'Research/All noisy HS/i HS 90%/90_I_Elbow_Circle_Down27.mp4', 'path': 'Research/All noisy HS/i HS 90%/90_I_Elbow_Circle_Down27.mp4'},
    {'name': 'Research/All noisy HS/R HS 90%/90_R_Neutral_Twist_Down4.mp4', 'path': 'Research/All noisy HS/R HS 90%/90_R_Neutral_Twist_Down4.mp4'},
    {'name': 'Research/All noisy HS/4 HS 90%/90_4_Elbow_Circle_Down24.mp4', 'path': 'Research/All noisy HS/4 HS 90%/90_4_Elbow_Circle_Down24.mp4'},
    {'name': 'Research/All noisy HS/A HS 90%/90_A_Elbow_Circle_Forward25.mp4', 'path': 'Research/All noisy HS/A HS 90%/90_A_Elbow_Circle_Forward25.mp4'},
    {'name': 'Research/All noisy HS/5 HS 90%/90_5_Elbow_Twist_Forward19.mp4', 'path': 'Research/All noisy HS/5 HS 90%/90_5_Elbow_Twist_Forward19.mp4'},
    {'name': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Mouth_Circle_Down15.mp4', 'path': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Mouth_Circle_Down15.mp4'},
    {'name': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Mouth_Circle_Forward13.mp4', 'path': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Mouth_Circle_Forward13.mp4'},
    {'name': 'Research/All noisy HS/K HS 90%/90_K_Elbow_Circle_Self25.mp4', 'path': 'Research/All noisy HS/K HS 90%/90_K_Elbow_Circle_Self25.mp4'},
    {'name': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Neutral_Circle_Self5.mp4', 'path': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Neutral_Circle_Self5.mp4'},
    {'name': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Mouth_Circle_Down15.mp4', 'path': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Mouth_Circle_Down15.mp4'},
    {'name': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Elbow_Circle_Forward24.mp4', 'path': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Elbow_Circle_Forward24.mp4'},
    {'name': 'Research/All noisy HS/i HS 90%/90_I_Mouth_Lateral_Self20.mp4', 'path': 'Research/All noisy HS/i HS 90%/90_I_Mouth_Lateral_Self20.mp4'},
    {'name': 'Research/All noisy HS/E HS 90%/90_E_Mouth_Lateral_Self17.mp4', 'path': 'Research/All noisy HS/E HS 90%/90_E_Mouth_Lateral_Self17.mp4'},
    {'name': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Mouth_Circle_Forward13.mp4', 'path': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Mouth_Circle_Forward13.mp4'},
    {'name': 'Research/All noisy HS/B HS 90%/90_B_Mouth_Twist_Forward12.mp4', 'path': 'Research/All noisy HS/B HS 90%/90_B_Mouth_Twist_Forward12.mp4'},
    {'name': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Neutral_Twist_Down3.mp4', 'path': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Neutral_Twist_Down3.mp4'},
    {'name': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Neutral_Twist_Self2.mp4', 'path': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Neutral_Twist_Self2.mp4'},
    {'name': 'Research/All noisy HS/i HS 90%/90_I_Mouth_Twist_Down14.mp4', 'path': 'Research/All noisy HS/i HS 90%/90_I_Mouth_Twist_Down14.mp4'},
    {'name': 'Research/All noisy HS/1 HS 90%/90_1_Elbow_Lateral_Forward25.mp4', 'path': 'Research/All noisy HS/1 HS 90%/90_1_Elbow_Lateral_Forward25.mp4'},
    {'name': 'Research/All noisy HS/S HS 90%/90_S_Elbow_Lateral_Down28.mp4', 'path': 'Research/All noisy HS/S HS 90%/90_S_Elbow_Lateral_Down28.mp4'},
    {'name': 'Research/All noisy HS/S HS 90%/90_S_Neutral_Lateral_Forward7.mp4', 'path': 'Research/All noisy HS/S HS 90%/90_S_Neutral_Lateral_Forward7.mp4'},
    {'name': 'Research/All noisy HS/10 HS 90%/90_10_Neutral_Twist_Self2.mp4', 'path': 'Research/All noisy HS/10 HS 90%/90_10_Neutral_Twist_Self2.mp4'},
    {'name': 'Research/All noisy HS/W HS 90%/90_W_Elbow_Circle_Forward23.mp4', 'path': 'Research/All noisy HS/W HS 90%/90_W_Elbow_Circle_Forward23.mp4'},
    {'name': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Neutral_Lateral_Down9.mp4', 'path': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Neutral_Lateral_Down9.mp4'},
    {'name': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Elbow_Twist_Forward20.mp4', 'path': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Elbow_Twist_Forward20.mp4'},
    {'name': 'Research/All noisy HS/C HS 90%/90_C_Elbow_Circle_Down24.mp4', 'path': 'Research/All noisy HS/C HS 90%/90_C_Elbow_Circle_Down24.mp4'},
    {'name': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Mouth_Circle_Down16.mp4', 'path': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Mouth_Circle_Down16.mp4'},
    {'name': 'Research/All noisy HS/W HS 90%/90_W_Mouth_Circle_Down16.mp4', 'path': 'Research/All noisy HS/W HS 90%/90_W_Mouth_Circle_Down16.mp4'},
    {'name': 'Research/All noisy HS/3 HS 90%/90_3_Mouth_Circle_Self14.mp4', 'path': 'Research/All noisy HS/3 HS 90%/90_3_Mouth_Circle_Self14.mp4'},
    {'name': 'Research/All noisy HS/D HS 90%/90_D_Mouth_Circle_Forward13.mp4', 'path': 'Research/All noisy HS/D HS 90%/90_D_Mouth_Circle_Forward13.mp4'},
    {'name': 'Research/All noisy HS/F HS 90%/90_F_Mouth_Circle_Down16.mp4', 'path': 'Research/All noisy HS/F HS 90%/90_F_Mouth_Circle_Down16.mp4'},
    {'name': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Neutral_Lateral_Forward8.mp4', 'path': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Neutral_Lateral_Forward8.mp4'},
    {'name': 'Research/All noisy HS/4 HS 90%/90_4_Neutral_Twist_Down3.mp4', 'path': 'Research/All noisy HS/4 HS 90%/90_4_Neutral_Twist_Down3.mp4'},
    {'name': 'Research/All noisy HS/V HS 90%/90_V_Elbow_Circle_Forward25.mp4', 'path': 'Research/All noisy HS/V HS 90%/90_V_Elbow_Circle_Forward25.mp4'},
    {'name': 'Research/All noisy HS/W HS 90%/90_W_Neutral_Twist_Self3.mp4', 'path': 'Research/All noisy HS/W HS 90%/90_W_Neutral_Twist_Self3.mp4'},
    {'name': 'Research/All noisy HS/F HS 90%/90_F_Neutral_Lateral_Down10.mp4', 'path': 'Research/All noisy HS/F HS 90%/90_F_Neutral_Lateral_Down10.mp4'},
    {'name': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Elbow_Lateral_Down28.mp4', 'path': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Elbow_Lateral_Down28.mp4'},
    {'name': 'Research/All noisy HS/W HS 90%/90_W_Neutral_Lateral_Forward8.mp4', 'path': 'Research/All noisy HS/W HS 90%/90_W_Neutral_Lateral_Forward8.mp4'},
    {'name': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Neutral_Lateral_Down9.mp4', 'path': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Neutral_Lateral_Down9.mp4'},
    {'name': 'Research/All noisy HS/R HS 90%/90_R_Neutral_Circle_Self7.mp4', 'path': 'Research/All noisy HS/R HS 90%/90_R_Neutral_Circle_Self7.mp4'},
    {'name': 'Research/All noisy HS/3 HS 90%/90_3_Elbow_Lateral_Down27.mp4', 'path': 'Research/All noisy HS/3 HS 90%/90_3_Elbow_Lateral_Down27.mp4'},
    {'name': 'Research/All noisy HS/K HS 90%/90_K_Mouth_Lateral_Forward18.mp4', 'path': 'Research/All noisy HS/K HS 90%/90_K_Mouth_Lateral_Forward18.mp4'},
    {'name': 'Research/All noisy HS/1 HS 90%/90_1_Mouth_Lateral_Self17.mp4', 'path': 'Research/All noisy HS/1 HS 90%/90_1_Mouth_Lateral_Self17.mp4'},
    {'name': 'Research/All noisy HS/D HS 90%/90_D_Elbow_Circle_Down24.mp4', 'path': 'Research/All noisy HS/D HS 90%/90_D_Elbow_Circle_Down24.mp4'},
    {'name': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Neutral_Lateral_Down9.mp4', 'path': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Neutral_Lateral_Down9.mp4'},
    {'name': 'Research/All noisy HS/U HS 90%/90_U_Elbow_Circle_Self26.mp4', 'path': 'Research/All noisy HS/U HS 90%/90_U_Elbow_Circle_Self26.mp4'},
    {'name': 'Research/All noisy HS/G HS 90%/90_G_Neutral_Lateral_Self8.mp4', 'path': 'Research/All noisy HS/G HS 90%/90_G_Neutral_Lateral_Self8.mp4'},
    {'name': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Elbow_Circle_Forwawrd22.mp4', 'path': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Elbow_Circle_Forwawrd22.mp4'},
    {'name': 'Research/All noisy HS/B HS 90%/90_B_Mouth_Twist_Down14.mp4', 'path': 'Research/All noisy HS/B HS 90%/90_B_Mouth_Twist_Down14.mp4'},
    {'name': 'Research/All noisy HS/B HS 90%/90_B_Mouth_Twist_Self13.mp4', 'path': 'Research/All noisy HS/B HS 90%/90_B_Mouth_Twist_Self13.mp4'},
    {'name': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Mouth_Circle_Forward15.mp4', 'path': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Mouth_Circle_Forward15.mp4'},
    {'name': 'Research/All noisy HS/3 HS 90%/90_3_Elbow_Circle_Forward22.mp4', 'path': 'Research/All noisy HS/3 HS 90%/90_3_Elbow_Circle_Forward22.mp4'},
    {'name': 'Research/All noisy HS/F HS 90%/90_F_Elbow_Twist_Self21.mp4', 'path': 'Research/All noisy HS/F HS 90%/90_F_Elbow_Twist_Self21.mp4'},
    {'name': 'Research/All noisy HS/10 HS 90%/90_10_Mouth_Circle_Down17.mp4', 'path': 'Research/All noisy HS/10 HS 90%/90_10_Mouth_Circle_Down17.mp4'},
    {'name': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Neutral_Twist_Forward1.mp4', 'path': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Neutral_Twist_Forward1.mp4'},
    {'name': 'Research/All noisy HS/L HS 90%/90_L_Neutral_Twist_Self2.mp4', 'path': 'Research/All noisy HS/L HS 90%/90_L_Neutral_Twist_Self2.mp4'},
    {'name': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Elbow_Circle_Self25.mp4', 'path': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Elbow_Circle_Self25.mp4'},
    {'name': 'Research/All noisy HS/C HS 90%/90_C_Mouth_Circle_Down15.mp4', 'path': 'Research/All noisy HS/C HS 90%/90_C_Mouth_Circle_Down15.mp4'},
    {'name': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Neutral_Lateral_Self8.mp4', 'path': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Neutral_Lateral_Self8.mp4'},
    {'name': 'Research/All noisy HS/10 HS 90%/90_10_Elbow_Circle_Self25.mp4', 'path': 'Research/All noisy HS/10 HS 90%/90_10_Elbow_Circle_Self25.mp4'},
    {'name': 'Research/All noisy HS/E HS 90%/90_E_Elbow_Lateral_Self26.mp4', 'path': 'Research/All noisy HS/E HS 90%/90_E_Elbow_Lateral_Self26.mp4'},
    {'name': 'Research/All noisy HS/U HS 90%/90_U_Elbow_Lateral_Self29.mp4', 'path': 'Research/All noisy HS/U HS 90%/90_U_Elbow_Lateral_Self29.mp4'},
    {'name': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Elbow_Twist_Forward21.mp4', 'path': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Elbow_Twist_Forward21.mp4'},
    {'name': 'Research/All noisy HS/R HS 90%/90_R_Neutral_Twist_Forward1.mp4', 'path': 'Research/All noisy HS/R HS 90%/90_R_Neutral_Twist_Forward1.mp4'},
    {'name': 'Research/All noisy HS/D HS 90%/90_D_Neutral_Twist_Forward1.mp4', 'path': 'Research/All noisy HS/D HS 90%/90_D_Neutral_Twist_Forward1.mp4'},
    {'name': 'Research/All noisy HS/V HS 90%/90_V_Mouth_Twist_Forward13.mp4', 'path': 'Research/All noisy HS/V HS 90%/90_V_Mouth_Twist_Forward13.mp4'},
    {'name': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Mouth_Circle_Down16.mp4', 'path': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Mouth_Circle_Down16.mp4'},
    {'name': 'Research/All noisy HS/4 HS 90%/90_4_Elbow_Lateral_Forward25.mp4', 'path': 'Research/All noisy HS/4 HS 90%/90_4_Elbow_Lateral_Forward25.mp4'},
    {'name': 'Research/All noisy HS/W HS 90%/90_W_Elbow_Circle_Down25.mp4', 'path': 'Research/All noisy HS/W HS 90%/90_W_Elbow_Circle_Down25.mp4'},
    {'name': 'Research/All noisy HS/L HS 90%/90_L_Mouth_Circle_Forward13.mp4', 'path': 'Research/All noisy HS/L HS 90%/90_L_Mouth_Circle_Forward13.mp4'},
    {'name': 'Research/All noisy HS/i HS 90%/90_I_Neutral_Circle_Self5.mp4', 'path': 'Research/All noisy HS/i HS 90%/90_I_Neutral_Circle_Self5.mp4'},
    {'name': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Mouth_Circle_Forward13.mp4', 'path': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Mouth_Circle_Forward13.mp4'},
    {'name': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Neutral_Twist_Forward1.mp4', 'path': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Neutral_Twist_Forward1.mp4'},
    {'name': 'Research/All noisy HS/U HS 90%/90_U_Elbow_Twist_Forward22.mp4', 'path': 'Research/All noisy HS/U HS 90%/90_U_Elbow_Twist_Forward22.mp4'},
    {'name': 'Research/All noisy HS/D HS 90%/90_D_Mouth_Lateral_Self17.mp4', 'path': 'Research/All noisy HS/D HS 90%/90_D_Mouth_Lateral_Self17.mp4'},
    {'name': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Neutral_Twist_Down3.mp4', 'path': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Neutral_Twist_Down3.mp4'},
    {'name': 'Research/All noisy HS/L HS 90%/90_L_Elbow_Lateral_Self26.mp4', 'path': 'Research/All noisy HS/L HS 90%/90_L_Elbow_Lateral_Self26.mp4'},
    {'name': 'Research/All noisy HS/1 HS 90%/90_1_Mouth_Lateral_Forward16.mp4', 'path': 'Research/All noisy HS/1 HS 90%/90_1_Mouth_Lateral_Forward16.mp4'},
    {'name': 'Research/All noisy HS/3 HS 90%/90_3_Neutral_Lateral_Down9.mp4', 'path': 'Research/All noisy HS/3 HS 90%/90_3_Neutral_Lateral_Down9.mp4'},
    {'name': 'Research/All noisy HS/S HS 90%/90_S_Mouth_Lateral_Down18.mp4', 'path': 'Research/All noisy HS/S HS 90%/90_S_Mouth_Lateral_Down18.mp4'},
    {'name': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Elbow_Circle_Forward22.mp4', 'path': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Elbow_Circle_Forward22.mp4'},
    {'name': 'Research/All noisy HS/F HS 90%/90_F_Mouth_Lateral_Down19.mp4', 'path': 'Research/All noisy HS/F HS 90%/90_F_Mouth_Lateral_Down19.mp4'},
    {'name': 'Research/All noisy HS/F HS 90%/90_F_Elbow_Lateral_Down28.mp4', 'path': 'Research/All noisy HS/F HS 90%/90_F_Elbow_Lateral_Down28.mp4'},
    {'name': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Neutral_Circle_Self7.mp4', 'path': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Neutral_Circle_Self7.mp4'},
    {'name': 'Research/All noisy HS/D HS 90%/90_D_Elbow_Circle_Self23.mp4', 'path': 'Research/All noisy HS/D HS 90%/90_D_Elbow_Circle_Self23.mp4'},
    {'name': 'Research/All noisy HS/O HS 90%/90_O_Elbow_Circle_Self25.mp4', 'path': 'Research/All noisy HS/O HS 90%/90_O_Elbow_Circle_Self25.mp4'},
    {'name': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Neutral_Circle_Down7.mp4', 'path': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Neutral_Circle_Down7.mp4'},
    {'name': 'Research/All noisy HS/B HS 90%/90_B_Mouth_Circle_Forward15.mp4', 'path': 'Research/All noisy HS/B HS 90%/90_B_Mouth_Circle_Forward15.mp4'},
    {'name': 'Research/All noisy HS/E HS 90%/90_E_Neutral_Twist_Down3.mp4', 'path': 'Research/All noisy HS/E HS 90%/90_E_Neutral_Twist_Down3.mp4'},
    {'name': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Mouth_Circle_Down15.mp4', 'path': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Mouth_Circle_Down15.mp4'},
    {'name': 'Research/All noisy HS/8 HS 90%/90_8_Neutral_Twist_Down4.mp4', 'path': 'Research/All noisy HS/8 HS 90%/90_8_Neutral_Twist_Down4.mp4'},
    {'name': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Neutral_Twist_Self3.mp4', 'path': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Neutral_Twist_Self3.mp4'},
    {'name': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Mouth_Circle_Forward15.mp4', 'path': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Mouth_Circle_Forward15.mp4'},
    {'name': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Elbow_Lateral_Self28.mp4', 'path': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Elbow_Lateral_Self28.mp4'},
    {'name': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Elbow_Twist_Forward20.mp4', 'path': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Elbow_Twist_Forward20.mp4'},
    {'name': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Elbow_Twist_Down21.mp4', 'path': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Elbow_Twist_Down21.mp4'},
    {'name': 'Research/All noisy HS/E HS 90%/90_E_Mouth_Twist_Self11.mp4', 'path': 'Research/All noisy HS/E HS 90%/90_E_Mouth_Twist_Self11.mp4'},
    {'name': 'Research/All noisy HS/R HS 90%/90_R_Neutral_Lateral_Self10.mp4', 'path': 'Research/All noisy HS/R HS 90%/90_R_Neutral_Lateral_Self10.mp4'},
    {'name': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Elbow_Lateral_Down29.mp4', 'path': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Elbow_Lateral_Down29.mp4'},
    {'name': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Mouth_Twist_Down14.mp4', 'path': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Mouth_Twist_Down14.mp4'},
    {'name': 'Research/All noisy HS/L HS 90%/90_L_Neutral_Circle_Forward4.mp4', 'path': 'Research/All noisy HS/L HS 90%/90_L_Neutral_Circle_Forward4.mp4'},
    {'name': 'Research/All noisy HS/4 HS 90%/90_4_Elbow_Twist_Self20.mp4', 'path': 'Research/All noisy HS/4 HS 90%/90_4_Elbow_Twist_Self20.mp4'},
    {'name': 'Research/All noisy HS/V HS 90%/90_V_Neutral_Circle_Down8.mp4', 'path': 'Research/All noisy HS/V HS 90%/90_V_Neutral_Circle_Down8.mp4'},
    {'name': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Elbow_Circle_Down24.mp4', 'path': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Elbow_Circle_Down24.mp4'},
    {'name': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Elbow_Circle_Self23.mp4', 'path': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Elbow_Circle_Self23.mp4'},
    {'name': 'Research/All noisy HS/5 HS 90%/90_5_Mouth_Circle_Forward13.mp4', 'path': 'Research/All noisy HS/5 HS 90%/90_5_Mouth_Circle_Forward13.mp4'},
    {'name': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Elbow_Twist_Forward19.mp4', 'path': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Elbow_Twist_Forward19.mp4'},
    {'name': 'Research/All noisy HS/A HS 90%/90_A_Mouth_Circle_Down18.mp4', 'path': 'Research/All noisy HS/A HS 90%/90_A_Mouth_Circle_Down18.mp4'},
    {'name': 'Research/All noisy HS/X HS 90%/90_X_Neutral_Circle_Forward4.mp4', 'path': 'Research/All noisy HS/X HS 90%/90_X_Neutral_Circle_Forward4.mp4'},
    {'name': 'Research/All noisy HS/G HS 90%/90_G_Mouth_Twist_Forward10.mp4', 'path': 'Research/All noisy HS/G HS 90%/90_G_Mouth_Twist_Forward10.mp4'},
    {'name': 'Research/All noisy HS/1 HS 90%/90_1_Neutral_Circle_Down6.mp4', 'path': 'Research/All noisy HS/1 HS 90%/90_1_Neutral_Circle_Down6.mp4'},
    {'name': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Elbow_Circle_Forward22.mp4', 'path': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Elbow_Circle_Forward22.mp4'},
    {'name': 'Research/All noisy HS/G HS 90%/90_G_Mouth_Lateral_Down18.mp4', 'path': 'Research/All noisy HS/G HS 90%/90_G_Mouth_Lateral_Down18.mp4'},
    {'name': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Mouth_Twist_Self11.mp4', 'path': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Mouth_Twist_Self11.mp4'},
    {'name': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Elbow_Circle_Forward22.mp4', 'path': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Elbow_Circle_Forward22.mp4'},
    {'name': 'Research/All noisy HS/3 HS 90%/90_3_Mouth_Circle_Down15.mp4', 'path': 'Research/All noisy HS/3 HS 90%/90_3_Mouth_Circle_Down15.mp4'},
    {'name': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Elbow_Lateral_Self27.mp4', 'path': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Elbow_Lateral_Self27.mp4'},
    {'name': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Mouth_Circle_Down17.mp4', 'path': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Mouth_Circle_Down17.mp4'},
    {'name': 'Research/All noisy HS/G HS 90%/90_G_Elbow_Twist_Forward20.mp4', 'path': 'Research/All noisy HS/G HS 90%/90_G_Elbow_Twist_Forward20.mp4'},
    {'name': 'Research/All noisy HS/A HS 90%/90_A_Mouth_Twist_Down15.mp4', 'path': 'Research/All noisy HS/A HS 90%/90_A_Mouth_Twist_Down15.mp4'},
    {'name': 'Research/All noisy HS/1 HS 90%/90_1_Neutral_Lateral_Down9.mp4', 'path': 'Research/All noisy HS/1 HS 90%/90_1_Neutral_Lateral_Down9.mp4'},
    {'name': 'Research/All noisy HS/G HS 90%/90_G_Neutral_Lateral_Down9.mp4', 'path': 'Research/All noisy HS/G HS 90%/90_G_Neutral_Lateral_Down9.mp4'},
    {'name': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Elbow_Twist_Self21.mp4', 'path': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Elbow_Twist_Self21.mp4'},
    {'name': 'Research/All noisy HS/B HS 90%/90_B_Elbow_Lateral_Down26.mp4', 'path': 'Research/All noisy HS/B HS 90%/90_B_Elbow_Lateral_Down26.mp4'},
    {'name': 'Research/All noisy HS/K HS 90%/90_K_Neutral_Lateral_Forward9.mp4', 'path': 'Research/All noisy HS/K HS 90%/90_K_Neutral_Lateral_Forward9.mp4'},
    {'name': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Neutral_Lateral_Down9.mp4', 'path': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Neutral_Lateral_Down9.mp4'},
    {'name': 'Research/All noisy HS/Y HS 90%/90_Y_Elbow_Twist_Forward21.mp4', 'path': 'Research/All noisy HS/Y HS 90%/90_Y_Elbow_Twist_Forward21.mp4'},
    {'name': 'Research/All noisy HS/10 HS 90%/90_10_Mouth_Circle_Self16.mp4', 'path': 'Research/All noisy HS/10 HS 90%/90_10_Mouth_Circle_Self16.mp4'},
    {'name': 'Research/All noisy HS/L HS 90%/90_L_Elbow_Circle_Down24.mp4', 'path': 'Research/All noisy HS/L HS 90%/90_L_Elbow_Circle_Down24.mp4'},
    {'name': 'Research/All noisy HS/K HS 90%/90_K_Elbow_Circle_Down26.mp4', 'path': 'Research/All noisy HS/K HS 90%/90_K_Elbow_Circle_Down26.mp4'},
    {'name': 'Research/All noisy HS/i HS 90%/90_I_Elbow_Lateral_Down30.mp4', 'path': 'Research/All noisy HS/i HS 90%/90_I_Elbow_Lateral_Down30.mp4'},
    {'name': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Elbow_Circle_Self23.mp4', 'path': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Elbow_Circle_Self23.mp4'},
    {'name': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Elbow_Lateral_Self26.mp4', 'path': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Elbow_Lateral_Self26.mp4'},
    {'name': 'Research/All noisy HS/R HS 90%/90_R_Mouth_Lateral_Down21.mp4', 'path': 'Research/All noisy HS/R HS 90%/90_R_Mouth_Lateral_Down21.mp4'},
    {'name': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Neutral_Lateral_Forward7.mp4', 'path': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Neutral_Lateral_Forward7.mp4'},
    {'name': 'Research/All noisy HS/O HS 90%/90_O_Elbow_Lateral_Forward27.mp4', 'path': 'Research/All noisy HS/O HS 90%/90_O_Elbow_Lateral_Forward27.mp4'},
    {'name': 'Research/All noisy HS/S HS 90%/90_S_Elbow_Twist_Self21.mp4', 'path': 'Research/All noisy HS/S HS 90%/90_S_Elbow_Twist_Self21.mp4'},
    {'name': 'Research/All noisy HS/1 HS 90%/90_1_Mouth_Circle_Self14.mp4', 'path': 'Research/All noisy HS/1 HS 90%/90_1_Mouth_Circle_Self14.mp4'},
    {'name': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Elbow_Twist_Forward19.mp4', 'path': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Elbow_Twist_Forward19.mp4'},
    {'name': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Mouth_Lateral_Self17.mp4', 'path': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Mouth_Lateral_Self17.mp4'},
    {'name': 'Research/All noisy HS/S HS 90%/90_S_Elbow_Circle_Down25.mp4', 'path': 'Research/All noisy HS/S HS 90%/90_S_Elbow_Circle_Down25.mp4'},
    {'name': 'Research/All noisy HS/10 HS 90%/90_10_Mouth_Circle_Forward15.mp4', 'path': 'Research/All noisy HS/10 HS 90%/90_10_Mouth_Circle_Forward15.mp4'},
    {'name': 'Research/All noisy HS/K HS 90%/90_K_Elbow_Twist_Down23.mp4', 'path': 'Research/All noisy HS/K HS 90%/90_K_Elbow_Twist_Down23.mp4'},
    {'name': 'Research/All noisy HS/U HS 90%/90_U_Mouth_Twist_Forward10.mp4', 'path': 'Research/All noisy HS/U HS 90%/90_U_Mouth_Twist_Forward10.mp4'},
    {'name': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Elbow_Circle_Down24.mp4', 'path': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Elbow_Circle_Down24.mp4'},
    {'name': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Elbow_Circle_Forward25.mp4', 'path': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Elbow_Circle_Forward25.mp4'},
    {'name': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Elbow_Lateral_Forward27.mp4', 'path': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Elbow_Lateral_Forward27.mp4'},
    {'name': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Elbow_Circle_Forward22.mp4', 'path': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Elbow_Circle_Forward22.mp4'},
    {'name': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Mouth_Twist_Down12.mp4', 'path': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Mouth_Twist_Down12.mp4'},
    {'name': 'Research/All noisy HS/8 HS 90%/90_8_Mouth_Twist_Down13.mp4', 'path': 'Research/All noisy HS/8 HS 90%/90_8_Mouth_Twist_Down13.mp4'},
    {'name': 'Research/All noisy HS/W HS 90%/90_W_Mouth_Twist_Down13.mp4', 'path': 'Research/All noisy HS/W HS 90%/90_W_Mouth_Twist_Down13.mp4'},
    {'name': 'Research/All noisy HS/1 HS 90%/90_1_Elbow_Circle_Self23.mp4', 'path': 'Research/All noisy HS/1 HS 90%/90_1_Elbow_Circle_Self23.mp4'},
    {'name': 'Research/All noisy HS/i HS 90%/90_I_Elbow_Circle_Self26.mp4', 'path': 'Research/All noisy HS/i HS 90%/90_I_Elbow_Circle_Self26.mp4'},
    {'name': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Mouth_Lateral_Self19.mp4', 'path': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Mouth_Lateral_Self19.mp4'},
    {'name': 'Research/All noisy HS/C HS 90%/90_C_Elbow_Lateral_Self26.mp4', 'path': 'Research/All noisy HS/C HS 90%/90_C_Elbow_Lateral_Self26.mp4'},
    {'name': 'Research/All noisy HS/i HS 90%/90_I_Mouth_Lateral_Down21.mp4', 'path': 'Research/All noisy HS/i HS 90%/90_I_Mouth_Lateral_Down21.mp4'},
    {'name': 'Research/All noisy HS/L HS 90%/90_L_Elbow_Lateral_Down27.mp4', 'path': 'Research/All noisy HS/L HS 90%/90_L_Elbow_Lateral_Down27.mp4'},
    {'name': 'Research/All noisy HS/8 HS 90%/90_8_Neutral_Lateral_Down10.mp4', 'path': 'Research/All noisy HS/8 HS 90%/90_8_Neutral_Lateral_Down10.mp4'},
    {'name': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Elbow_Lateral_Self27.mp4', 'path': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Elbow_Lateral_Self27.mp4'},
    {'name': 'Research/All noisy HS/Y HS 90%/90_Y_Neutral_Lateral_Down11.mp4', 'path': 'Research/All noisy HS/Y HS 90%/90_Y_Neutral_Lateral_Down11.mp4'},
    {'name': 'Research/All noisy HS/F HS 90%/90_F_Elbow_Twist_Forward20.mp4', 'path': 'Research/All noisy HS/F HS 90%/90_F_Elbow_Twist_Forward20.mp4'},
    {'name': 'Research/All noisy HS/3 HS 90%/90_3_Neutral_Lateral_Forward7.mp4', 'path': 'Research/All noisy HS/3 HS 90%/90_3_Neutral_Lateral_Forward7.mp4'},
    {'name': 'Research/All noisy HS/U HS 90%/90_U_Neutral_Lateral_Down9.mp4', 'path': 'Research/All noisy HS/U HS 90%/90_U_Neutral_Lateral_Down9.mp4'},
    {'name': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Neutral_Twist_Down3.mp4', 'path': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Neutral_Twist_Down3.mp4'},
    {'name': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Neutral_Twist_Self2.mp4', 'path': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Neutral_Twist_Self2.mp4'},
    {'name': 'Research/All noisy HS/A HS 90%/90_A_Elbow_Lateral_Self29.mp4', 'path': 'Research/All noisy HS/A HS 90%/90_A_Elbow_Lateral_Self29.mp4'},
    {'name': 'Research/Excel books/Part 3.xlsx', 'path': 'Research/Excel books/Part 3.xlsx'},
    {'name': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Mouth_Twist_Self11.mp4', 'path': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Mouth_Twist_Self11.mp4'},
    {'name': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Mouth_Lateral_Down20.mp4', 'path': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Mouth_Lateral_Down20.mp4'},
    {'name': 'Research/All noisy HS/Y HS 90%/90_Y_Neutral_Lateral_Self10.mp4', 'path': 'Research/All noisy HS/Y HS 90%/90_Y_Neutral_Lateral_Self10.mp4'},
    {'name': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Neutral_Lateral_Forward7.mp4', 'path': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Neutral_Lateral_Forward7.mp4'},
    {'name': 'Research/All noisy HS/Y HS 90%/90_Y_Neutral_Lateral_Forward9.mp4', 'path': 'Research/All noisy HS/Y HS 90%/90_Y_Neutral_Lateral_Forward9.mp4'},
    {'name': 'Research/All noisy HS/E HS 90%/90_E_Elbow_Twist_Down21.mp4', 'path': 'Research/All noisy HS/E HS 90%/90_E_Elbow_Twist_Down21.mp4'},
    {'name': 'Research/All noisy HS/O HS 90%/90_O_Neutral_Lateral_Forward9.mp4', 'path': 'Research/All noisy HS/O HS 90%/90_O_Neutral_Lateral_Forward9.mp4'},
    {'name': 'Research/All noisy HS/10 HS 90%/90_10_Elbow_Circle_Down26.mp4', 'path': 'Research/All noisy HS/10 HS 90%/90_10_Elbow_Circle_Down26.mp4'},
    {'name': 'Research/All noisy HS/3 HS 90%/90_3_Elbow_Twist_Forward19.mp4', 'path': 'Research/All noisy HS/3 HS 90%/90_3_Elbow_Twist_Forward19.mp4'},
    {'name': 'Research/All noisy HS/U HS 90%/90_U_Elbow_Twist_Down24.mp4', 'path': 'Research/All noisy HS/U HS 90%/90_U_Elbow_Twist_Down24.mp4'},
    {'name': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Mouth_Lateral_Forward16.mp4', 'path': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Mouth_Lateral_Forward16.mp4'},
    {'name': 'Research/All noisy HS/i HS 90%/90_I_Mouth_Circle_Forward15.mp4', 'path': 'Research/All noisy HS/i HS 90%/90_I_Mouth_Circle_Forward15.mp4'},
    {'name': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Mouth_Twist_Forward11.mp4', 'path': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Mouth_Twist_Forward11.mp4'},
    {'name': 'Research/All noisy HS/R HS 90%/90_R_Mouth_Circle_Down18.mp4', 'path': 'Research/All noisy HS/R HS 90%/90_R_Mouth_Circle_Down18.mp4'},
    {'name': 'Research/All noisy HS/V HS 90%/90_V_Elbow_Circle_Self26.mp4', 'path': 'Research/All noisy HS/V HS 90%/90_V_Elbow_Circle_Self26.mp4'},
    {'name': 'Research/All noisy HS/D HS 90%/90_D_Mouth_Twist_Down12.mp4', 'path': 'Research/All noisy HS/D HS 90%/90_D_Mouth_Twist_Down12.mp4'},
    {'name': 'Research/All noisy HS/1 HS 90%/90_1_Elbow_Twist_Down21.mp4', 'path': 'Research/All noisy HS/1 HS 90%/90_1_Elbow_Twist_Down21.mp4'},
    {'name': 'Research/All noisy HS/L HS 90%/90_L_Mouth_Twist_Self11.mp4', 'path': 'Research/All noisy HS/L HS 90%/90_L_Mouth_Twist_Self11.mp4'},
    {'name': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Mouth_Lateral_Self17.mp4', 'path': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Mouth_Lateral_Self17.mp4'},
    {'name': 'Research/All noisy HS/V HS 90%/90_V_Elbow_Lateral_Forward28.mp4', 'path': 'Research/All noisy HS/V HS 90%/90_V_Elbow_Lateral_Forward28.mp4'},
    {'name': 'Research/All noisy HS/Y HS 90%/90_Y_Elbow_Circle_Down26.mp4', 'path': 'Research/All noisy HS/Y HS 90%/90_Y_Elbow_Circle_Down26.mp4'},
    {'name': 'Research/All noisy HS/V HS 90%/90_V_Neutral_Lateral_Down12.mp4', 'path': 'Research/All noisy HS/V HS 90%/90_V_Neutral_Lateral_Down12.mp4'},
    {'name': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Mouth_Twist_Self13.mp4', 'path': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Mouth_Twist_Self13.mp4'},
    {'name': 'Research/All noisy HS/4 HS 90%/90_4_Mouth_Circle_Self14.mp4', 'path': 'Research/All noisy HS/4 HS 90%/90_4_Mouth_Circle_Self14.mp4'},
    {'name': 'Research/All noisy HS/B HS 90%/90_B_Neutral_Lateral_Down11.mp4', 'path': 'Research/All noisy HS/B HS 90%/90_B_Neutral_Lateral_Down11.mp4'},
    {'name': 'Research/All noisy HS/5 HS 90%/90_5_Elbow_Twist_Self20.mp4', 'path': 'Research/All noisy HS/5 HS 90%/90_5_Elbow_Twist_Self20.mp4'},
    {'name': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Mouth_Circle_Forward14.mp4', 'path': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Mouth_Circle_Forward14.mp4'},
    {'name': 'Research/All noisy HS/G HS 90%/90_G_Elbow_Circle_Forward26.mp4', 'path': 'Research/All noisy HS/G HS 90%/90_G_Elbow_Circle_Forward26.mp4'},
    {'name': 'Research/All noisy HS/V HS 90%/90_V_Neutral_Twist_Forward2.mp4', 'path': 'Research/All noisy HS/V HS 90%/90_V_Neutral_Twist_Forward2.mp4'},
    {'name': 'Research/All noisy HS/L HS 90%/90_L_Elbow_Lateral_Forward25.mp4', 'path': 'Research/All noisy HS/L HS 90%/90_L_Elbow_Lateral_Forward25.mp4'},
    {'name': 'Research/All noisy HS/3 HS 90%/90_3_Mouth_Lateral_Forward16.mp4', 'path': 'Research/All noisy HS/3 HS 90%/90_3_Mouth_Lateral_Forward16.mp4'},
    {'name': 'Research/All noisy HS/i HS 90%/90_I_Neutral_Twist_Down3.mp4', 'path': 'Research/All noisy HS/i HS 90%/90_I_Neutral_Twist_Down3.mp4'},
    {'name': 'Research/All noisy HS/3 HS 90%/90_3_Neutral_Circle_Self5.mp4', 'path': 'Research/All noisy HS/3 HS 90%/90_3_Neutral_Circle_Self5.mp4'},
    {'name': 'Research/All noisy HS/B HS 90%/90_B_Mouth_Lateral_Forward18.mp4', 'path': 'Research/All noisy HS/B HS 90%/90_B_Mouth_Lateral_Forward18.mp4'},
    {'name': 'Research/All noisy HS/C HS 90%/90_C_Neutral_Circle_Self5.mp4', 'path': 'Research/All noisy HS/C HS 90%/90_C_Neutral_Circle_Self5.mp4'},
    {'name': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Mouth_Twist_Forward10.mp4', 'path': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Mouth_Twist_Forward10.mp4'},
    {'name': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Elbow_Twist_Forward21.mp4', 'path': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Elbow_Twist_Forward21.mp4'},
    {'name': 'Research/All noisy HS/C HS 90%/90_C_Elbow_Lateral_Down27.mp4', 'path': 'Research/All noisy HS/C HS 90%/90_C_Elbow_Lateral_Down27.mp4'},
    {'name': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Elbow_Twist_Down28.mp4', 'path': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Elbow_Twist_Down28.mp4'},
    {'name': 'Research/All noisy HS/R HS 90%/90_R_Neutral_Lateral_Down11.mp4', 'path': 'Research/All noisy HS/R HS 90%/90_R_Neutral_Lateral_Down11.mp4'},
    {'name': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Elbow_Lateral_Self26.mp4', 'path': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Elbow_Lateral_Self26.mp4'},
    {'name': 'Research/All noisy HS/G HS 90%/90_G_Neutral_Twist_Self2.mp4', 'path': 'Research/All noisy HS/G HS 90%/90_G_Neutral_Twist_Self2.mp4'},
    {'name': 'Research/All noisy HS/B HS 90%/90_B_Elbow_Twist_Self22.mp4', 'path': 'Research/All noisy HS/B HS 90%/90_B_Elbow_Twist_Self22.mp4'},
    {'name': 'Research/All noisy HS/Y HS 90%/90_Y_Elbow_Twist_Down23.mp4', 'path': 'Research/All noisy HS/Y HS 90%/90_Y_Elbow_Twist_Down23.mp4'},
    {'name': 'Research/All noisy HS/X HS 90%/90_X_Mouth_Lateral_Self17.mp4', 'path': 'Research/All noisy HS/X HS 90%/90_X_Mouth_Lateral_Self17.mp4'},
    {'name': 'Research/All noisy HS/G HS 90%/90_G_Mouth_Twist_Down12.mp4', 'path': 'Research/All noisy HS/G HS 90%/90_G_Mouth_Twist_Down12.mp4'},
    {'name': 'Research/All noisy HS/B HS 90%/90_B_Neutral_Twist_Self2.mp4', 'path': 'Research/All noisy HS/B HS 90%/90_B_Neutral_Twist_Self2.mp4'},
    {'name': 'Research/All noisy HS/F HS 90%/90_F_Neutral_Circle_Self5.mp4', 'path': 'Research/All noisy HS/F HS 90%/90_F_Neutral_Circle_Self5.mp4'},
    {'name': 'Research/All noisy HS/A HS 90%/90_A_Elbow_Twist_Forward22.mp4', 'path': 'Research/All noisy HS/A HS 90%/90_A_Elbow_Twist_Forward22.mp4'},
    {'name': 'Research/All noisy HS/1 HS 90%/90_1_Neutral_Twist_Self2.mp4', 'path': 'Research/All noisy HS/1 HS 90%/90_1_Neutral_Twist_Self2.mp4'},
    {'name': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Neutral_Circle_Down6.mp4', 'path': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Neutral_Circle_Down6.mp4'},
    {'name': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Mouth_Lateral_Down18.mp4', 'path': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Mouth_Lateral_Down18.mp4'},
    {'name': 'Research/All noisy HS/F HS 90%/90_F_Mouth_Twist_Self12.mp4', 'path': 'Research/All noisy HS/F HS 90%/90_F_Mouth_Twist_Self12.mp4'},
    {'name': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Elbow_Circle_Down26.mp4', 'path': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Elbow_Circle_Down26.mp4'},
    {'name': 'Research/All noisy HS/A HS 90%/90_A_Neutral_Circle_Down3.mp4', 'path': 'Research/All noisy HS/A HS 90%/90_A_Neutral_Circle_Down3.mp4'},
    {'name': 'Research/All noisy HS/C HS 90%/90_C_Elbow_Circle_Self23.mp4', 'path': 'Research/All noisy HS/C HS 90%/90_C_Elbow_Circle_Self23.mp4'},
    {'name': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Mouth_Lateral_Forward16.mp4', 'path': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Mouth_Lateral_Forward16.mp4'},
    {'name': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Mouth_Lateral_Self19.mp4', 'path': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Mouth_Lateral_Self19.mp4'},
    {'name': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Neutral_Circle_Self5.mp4', 'path': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Neutral_Circle_Self5.mp4'},
    {'name': 'Research/All noisy HS/R HS 90%/90_R_Elbow_Lateral_Down32.mp4', 'path': 'Research/All noisy HS/R HS 90%/90_R_Elbow_Lateral_Down32.mp4'},
    {'name': 'Research/All noisy HS/O HS 90%/90_O_Neutral_Twist_Forward1.mp4', 'path': 'Research/All noisy HS/O HS 90%/90_O_Neutral_Twist_Forward1.mp4'},
    {'name': 'Research/All noisy HS/B HS 90%/90_B_Elbow_Circle_Forward1.mp4', 'path': 'Research/All noisy HS/B HS 90%/90_B_Elbow_Circle_Forward1.mp4'},
    {'name': 'Research/All noisy HS/L HS 90%/90_L_Mouth_Circle_Self14.mp4', 'path': 'Research/All noisy HS/L HS 90%/90_L_Mouth_Circle_Self14.mp4'},
    {'name': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Mouth_Lateral_Forward16.mp4', 'path': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Mouth_Lateral_Forward16.mp4'},
    {'name': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Elbow_Lateral_Self26.mp4', 'path': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Elbow_Lateral_Self26.mp4'},
    {'name': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Elbow_Lateral_Forward25.mp4', 'path': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Elbow_Lateral_Forward25.mp4'},
    {'name': 'Research/All noisy HS/4 HS 90%/90_4_Neutral_Circle_Down6.mp4', 'path': 'Research/All noisy HS/4 HS 90%/90_4_Neutral_Circle_Down6.mp4'},
    {'name': 'Research/All noisy HS/8 HS 90%/90_8_Neutral_Twist_Self3.mp4', 'path': 'Research/All noisy HS/8 HS 90%/90_8_Neutral_Twist_Self3.mp4'},
    {'name': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Mouth_Circle_Forward13.mp4', 'path': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Mouth_Circle_Forward13.mp4'},
    {'name': 'Research/All noisy HS/8 HS 90%/90_8_Mouth_Circle_Down16.mp4', 'path': 'Research/All noisy HS/8 HS 90%/90_8_Mouth_Circle_Down16.mp4'},
    {'name': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Elbow_Circle_Self25.mp4', 'path': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Elbow_Circle_Self25.mp4'},
    {'name': 'Research/All noisy HS/L HS 90%/90_L_Elbow_Twist_Forward19.mp4', 'path': 'Research/All noisy HS/L HS 90%/90_L_Elbow_Twist_Forward19.mp4'},
    {'name': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Neutral_Lateral_Forward7.mp4', 'path': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Neutral_Lateral_Forward7.mp4'},
    {'name': 'Research/All noisy HS/4 HS 90%/90_4_Neutral_Circle_Self5.mp4', 'path': 'Research/All noisy HS/4 HS 90%/90_4_Neutral_Circle_Self5.mp4'},
    {'name': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Mouth_Circle_Self15.mp4', 'path': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Mouth_Circle_Self15.mp4'},
    {'name': 'Research/All noisy HS/L HS 90%/90_L_Mouth_Lateral_Self17.mp4', 'path': 'Research/All noisy HS/L HS 90%/90_L_Mouth_Lateral_Self17.mp4'},
    {'name': 'Research/All noisy HS/X HS 90%/90_X_Mouth_Twist_Down12.mp4', 'path': 'Research/All noisy HS/X HS 90%/90_X_Mouth_Twist_Down12.mp4'},
    {'name': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Elbow_Lateral_Forward25.mp4', 'path': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Elbow_Lateral_Forward25.mp4'},
    {'name': 'Research/All noisy HS/8 HS 90%/90_8_Mouth_Circle_Self15.mp4', 'path': 'Research/All noisy HS/8 HS 90%/90_8_Mouth_Circle_Self15.mp4'},
    {'name': 'Research/All noisy HS/8 HS 90%/90_8_Mouth_Twist_Forward11.mp4', 'path': 'Research/All noisy HS/8 HS 90%/90_8_Mouth_Twist_Forward11.mp4'},
    {'name': 'Research/All noisy HS/A HS 90%/90_A_Mouth_Circle_Self17.mp4', 'path': 'Research/All noisy HS/A HS 90%/90_A_Mouth_Circle_Self17.mp4'},
    {'name': 'Research/All noisy HS/C HS 90%/90_C_Neutral_Circle_Forward4.mp4', 'path': 'Research/All noisy HS/C HS 90%/90_C_Neutral_Circle_Forward4.mp4'},
    {'name': 'Research/All noisy HS/i HS 90%/90_I_Neutral_Lateral_Down11.mp4', 'path': 'Research/All noisy HS/i HS 90%/90_I_Neutral_Lateral_Down11.mp4'},
    {'name': 'Research/All noisy HS/1 HS 90%/90_1_Mouth_Twist_Down12.mp4', 'path': 'Research/All noisy HS/1 HS 90%/90_1_Mouth_Twist_Down12.mp4'},
    {'name': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Mouth_Twist_Forward10.mp4', 'path': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Mouth_Twist_Forward10.mp4'},
    {'name': 'Research/All noisy HS/8 HS 90%/90_8_Mouth_Lateral_Self18.mp4', 'path': 'Research/All noisy HS/8 HS 90%/90_8_Mouth_Lateral_Self18.mp4'},
    {'name': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Neutral_Lateral_Self8.mp4', 'path': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Neutral_Lateral_Self8.mp4'},
    {'name': 'Research/All noisy HS/G HS 90%/90_G_Mouth_Lateral_Self17.mp4', 'path': 'Research/All noisy HS/G HS 90%/90_G_Mouth_Lateral_Self17.mp4'},
    {'name': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Mouth_Circle_Self14.mp4', 'path': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Mouth_Circle_Self14.mp4'},
    {'name': 'Research/All noisy HS/i HS 90%/90_I_Neutral_Lateral_Self10.mp4', 'path': 'Research/All noisy HS/i HS 90%/90_I_Neutral_Lateral_Self10.mp4'},
    {'name': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Mouth_Twist_Down13.mp4', 'path': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Mouth_Twist_Down13.mp4'},
    {'name': 'Research/All noisy HS/i HS 90%/90_I_Elbow_Lateral_Forward28.mp4', 'path': 'Research/All noisy HS/i HS 90%/90_I_Elbow_Lateral_Forward28.mp4'},
    {'name': 'Research/All noisy HS/i HS 90%/90_I_Mouth_Lateral_Forward19.mp4', 'path': 'Research/All noisy HS/i HS 90%/90_I_Mouth_Lateral_Forward19.mp4'},
    {'name': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Mouth_Circle_Self14.mp4', 'path': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Mouth_Circle_Self14.mp4'},
    {'name': 'Research/All noisy HS/10 HS 90%/90_10_Elbow_Twist_Down23.mp4', 'path': 'Research/All noisy HS/10 HS 90%/90_10_Elbow_Twist_Down23.mp4'},
    {'name': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Mouth_Lateral_Self17.mp4', 'path': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Mouth_Lateral_Self17.mp4'},
    {'name': 'Research/All noisy HS/D HS 90%/90_D_Mouth_Twist_Forward10.mp4', 'path': 'Research/All noisy HS/D HS 90%/90_D_Mouth_Twist_Forward10.mp4'},
    {'name': 'Research/All noisy HS/C HS 90%/90_C_Elbow_Twist_Forward19.mp4', 'path': 'Research/All noisy HS/C HS 90%/90_C_Elbow_Twist_Forward19.mp4'},
    {'name': 'Research/All noisy HS/1 HS 90%/90_1_Neutral_Lateral_Forward7.mp4', 'path': 'Research/All noisy HS/1 HS 90%/90_1_Neutral_Lateral_Forward7.mp4'},
    {'name': 'Research/All noisy HS/5 HS 90%/90_5_Elbow_Circle_Down24.mp4', 'path': 'Research/All noisy HS/5 HS 90%/90_5_Elbow_Circle_Down24.mp4'},
    {'name': 'Research/All noisy HS/V HS 90%/90_V_Mouth_Lateral_Self20.mp4', 'path': 'Research/All noisy HS/V HS 90%/90_V_Mouth_Lateral_Self20.mp4'},
    {'name': 'Research/All noisy HS/A HS 90%/90_A_Elbow_Twist_Self23.mp4', 'path': 'Research/All noisy HS/A HS 90%/90_A_Elbow_Twist_Self23.mp4'},
    {'name': 'Research/All noisy HS/Y HS 90%/90_Y_Mouth_Twist_Forward12.mp4', 'path': 'Research/All noisy HS/Y HS 90%/90_Y_Mouth_Twist_Forward12.mp4'},
    {'name': 'Research/All noisy HS/D HS 90%/90_D_Elbow_Lateral_Down27.mp4', 'path': 'Research/All noisy HS/D HS 90%/90_D_Elbow_Lateral_Down27.mp4'},
    {'name': 'Research/All noisy HS/R HS 90%/90_R_Mouth_Twist_Forward12.mp4', 'path': 'Research/All noisy HS/R HS 90%/90_R_Mouth_Twist_Forward12.mp4'},
    {'name': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Neutral_Circle_Forward4.mp4', 'path': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Neutral_Circle_Forward4.mp4'},
    {'name': 'Research/All noisy HS/V HS 90%/90_V_Neutral_Twist_Down4.mp4', 'path': 'Research/All noisy HS/V HS 90%/90_V_Neutral_Twist_Down4.mp4'},
    {'name': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Elbow_Circle_Forward23.mp4', 'path': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Elbow_Circle_Forward23.mp4'},
    {'name': 'Research/All noisy HS/A HS 90%/90_A_Neutral_Twist_Down1.mp4', 'path': 'Research/All noisy HS/A HS 90%/90_A_Neutral_Twist_Down1.mp4'},
    {'name': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Neutral_Twist_Down3.mp4', 'path': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Neutral_Twist_Down3.mp4'},
    {'name': 'Research/All noisy HS/O HS 90%/90_O_Mouth_Lateral_Forward18.mp4', 'path': 'Research/All noisy HS/O HS 90%/90_O_Mouth_Lateral_Forward18.mp4'},
    {'name': 'Research/All noisy HS/V HS 90%/90_V_Mouth_Lateral_Down21.mp4', 'path': 'Research/All noisy HS/V HS 90%/90_V_Mouth_Lateral_Down21.mp4'},
    {'name': 'Research/All noisy HS/G HS 90%/90_G_Mouth_Twist_Self11.mp4', 'path': 'Research/All noisy HS/G HS 90%/90_G_Mouth_Twist_Self11.mp4'},
    {'name': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Elbow_Circle_Down24.mp4', 'path': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Elbow_Circle_Down24.mp4'},
    {'name': 'Research/All noisy HS/D HS 90%/90_D_Mouth_Circle_Self14.mp4', 'path': 'Research/All noisy HS/D HS 90%/90_D_Mouth_Circle_Self14.mp4'},
    {'name': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Elbow_Circle_Forward24.mp4', 'path': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Elbow_Circle_Forward24.mp4'},
    {'name': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Neutral_Circle_Self5.mp4', 'path': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Neutral_Circle_Self5.mp4'},
    {'name': 'Research/All noisy HS/8 HS 90%/90_8_Mouth_Circle_Forward14.mp4', 'path': 'Research/All noisy HS/8 HS 90%/90_8_Mouth_Circle_Forward14.mp4'},
    {'name': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Elbow_Lateral_Down28.mp4', 'path': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Elbow_Lateral_Down28.mp4'},
    {'name': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Neutral_Twist_Forward1.mp4', 'path': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Neutral_Twist_Forward1.mp4'},
    {'name': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Elbow_Lateral_Forward.mp4', 'path': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Elbow_Lateral_Forward.mp4'},
    {'name': 'Research/All noisy HS/A HS 90%/90_A_Elbow_Lateral_Forward28.mp4', 'path': 'Research/All noisy HS/A HS 90%/90_A_Elbow_Lateral_Forward28.mp4'},
    {'name': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Neutral_Lateral_Self8.mp4', 'path': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Neutral_Lateral_Self8.mp4'},
    {'name': 'Research/All noisy HS/U HS 90%/90_U_Mouth_Circle_Down15.mp4', 'path': 'Research/All noisy HS/U HS 90%/90_U_Mouth_Circle_Down15.mp4'},
    {'name': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Mouth_Lateral_Self18.mp4', 'path': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Mouth_Lateral_Self18.mp4'},
    {'name': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Neutral_Twist_Self2.mp4', 'path': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Neutral_Twist_Self2.mp4'},
    {'name': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Neutral_Lateral_Down11.mp4', 'path': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Neutral_Lateral_Down11.mp4'},
    {'name': 'Research/All noisy HS/U HS 90%/90_U_Neutral_Circle_Forward4.mp4', 'path': 'Research/All noisy HS/U HS 90%/90_U_Neutral_Circle_Forward4.mp4'},
    {'name': 'Research/All noisy HS/B HS 90%/90_B_Mouth_Circle_Down17.mp4', 'path': 'Research/All noisy HS/B HS 90%/90_B_Mouth_Circle_Down17.mp4'},
    {'name': 'Research/All noisy HS/3 HS 90%/90_3_Elbow_Lateral_Self26.mp4', 'path': 'Research/All noisy HS/3 HS 90%/90_3_Elbow_Lateral_Self26.mp4'},
    {'name': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Mouth_Circle_Self16.mp4', 'path': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Mouth_Circle_Self16.mp4'},
    {'name': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Elbow_Lateral_Forward25.mp4', 'path': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Elbow_Lateral_Forward25.mp4'},
    {'name': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Elbow_Circle_Down25.mp4', 'path': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Elbow_Circle_Down25.mp4'},
    {'name': 'Research/All noisy HS/V HS 90%/90_V_Mouth_Circle_Forward16.mp4', 'path': 'Research/All noisy HS/V HS 90%/90_V_Mouth_Circle_Forward16.mp4'},
    {'name': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Mouth_Twist_Forward10.mp4', 'path': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Mouth_Twist_Forward10.mp4'},
    {'name': 'Research/All noisy HS/K HS 90%/90_K_Neutral_Twist_Forward1.mp4', 'path': 'Research/All noisy HS/K HS 90%/90_K_Neutral_Twist_Forward1.mp4'},
    {'name': 'Research/All noisy HS/3 HS 90%/90_3_Mouth_Twist_Self11.mp4', 'path': 'Research/All noisy HS/3 HS 90%/90_3_Mouth_Twist_Self11.mp4'},
    {'name': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Elbow_Lateral_Forward26.mp4', 'path': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Elbow_Lateral_Forward26.mp4'},
    {'name': 'Research/All noisy HS/Y HS 90%/90_Y_Mouth_Circle_Forward15.mp4', 'path': 'Research/All noisy HS/Y HS 90%/90_Y_Mouth_Circle_Forward15.mp4'},
    {'name': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Neutral_Circle_Self5.mp4', 'path': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Neutral_Circle_Self5.mp4'},
    {'name': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Neutral_Lateral_Self8.mp4', 'path': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Neutral_Lateral_Self8.mp4'},
    {'name': 'Research/All noisy HS/L HS 90%/90_L_Elbow_Circle_Forward22.mp4', 'path': 'Research/All noisy HS/L HS 90%/90_L_Elbow_Circle_Forward22.mp4'},
    {'name': 'Research/All noisy HS/L HS 90%/90_L_Mouth_Twist_Forward10.mp4', 'path': 'Research/All noisy HS/L HS 90%/90_L_Mouth_Twist_Forward10.mp4'},
    {'name': 'Research/All noisy HS/U HS 90%/90_U_Neutral_Twist_Forward1.mp4', 'path': 'Research/All noisy HS/U HS 90%/90_U_Neutral_Twist_Forward1.mp4'},
    {'name': 'Research/All noisy HS/X HS 90%/90_X_Neutral_Twist_Down3.mp4', 'path': 'Research/All noisy HS/X HS 90%/90_X_Neutral_Twist_Down3.mp4'},
    {'name': 'Research/All noisy HS/8 HS 90%/90_8_Neutral_Lateral_Self9.mp4', 'path': 'Research/All noisy HS/8 HS 90%/90_8_Neutral_Lateral_Self9.mp4'},
    {'name': 'Research/All noisy HS/A HS 90%/90_A_Elbow_Circle_Down27.mp4', 'path': 'Research/All noisy HS/A HS 90%/90_A_Elbow_Circle_Down27.mp4'},
    {'name': 'Research/All noisy HS/X HS 90%/90_X_Elbow_Lateral_Forward25.mp4', 'path': 'Research/All noisy HS/X HS 90%/90_X_Elbow_Lateral_Forward25.mp4'},
    {'name': 'Research/All noisy HS/K HS 90%/90_K_Mouth_Twist_Self13.mp4', 'path': 'Research/All noisy HS/K HS 90%/90_K_Mouth_Twist_Self13.mp4'},
    {'name': 'Research/All noisy HS/F HS 90%/90_F_Neutral_Twist_Forward1.mp4', 'path': 'Research/All noisy HS/F HS 90%/90_F_Neutral_Twist_Forward1.mp4'},
    {'name': 'Research/All noisy HS/S HS 90%/90_S_Mouth_Circle_Down15.mp4', 'path': 'Research/All noisy HS/S HS 90%/90_S_Mouth_Circle_Down15.mp4'},
    {'name': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Neutral_Circle_Forward4.mp4', 'path': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Neutral_Circle_Forward4.mp4'},
    {'name': 'Research/All noisy HS/K HS 90%/90_K_Elbow_Lateral_Down29.mp4', 'path': 'Research/All noisy HS/K HS 90%/90_K_Elbow_Lateral_Down29.mp4'},
    {'name': 'Research/All noisy HS/X HS 90%/90_X_Neutral_Twist_Self2.mp4', 'path': 'Research/All noisy HS/X HS 90%/90_X_Neutral_Twist_Self2.mp4'},
    {'name': 'Research/All noisy HS/E HS 90%/90_E_Mouth_Lateral_Forward16.mp4', 'path': 'Research/All noisy HS/E HS 90%/90_E_Mouth_Lateral_Forward16.mp4'},
    {'name': 'Research/All noisy HS/O HS 90%/90_O_Neutral_Circle_Self6.mp4', 'path': 'Research/All noisy HS/O HS 90%/90_O_Neutral_Circle_Self6.mp4'},
    {'name': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Neutral_Twist_Self2.mp4', 'path': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Neutral_Twist_Self2.mp4'},
    {'name': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Neutral_Lateral_Self8.mp4', 'path': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Neutral_Lateral_Self8.mp4'},
    {'name': 'Research/All noisy HS/U HS 90%/90_U_Mouth_Twist_Down12.mp4', 'path': 'Research/All noisy HS/U HS 90%/90_U_Mouth_Twist_Down12.mp4'},
    {'name': 'Research/All noisy HS/U HS 90%/90_U_Neutral_Lateral_Forward7.mp4', 'path': 'Research/All noisy HS/U HS 90%/90_U_Neutral_Lateral_Forward7.mp4'},
    {'name': 'Research/All noisy HS/O HS 90%/90_O_Elbow_Circle_Forward24.mp4', 'path': 'Research/All noisy HS/O HS 90%/90_O_Elbow_Circle_Forward24.mp4'},
    {'name': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Neutral_Twist_Forward1.mp4', 'path': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Neutral_Twist_Forward1.mp4'},
    {'name': 'Research/All noisy HS/B HS 90%/90_B_Elbow_Circle_Self2.mp4', 'path': 'Research/All noisy HS/B HS 90%/90_B_Elbow_Circle_Self2.mp4'},
    {'name': 'Research/All noisy HS/5 HS 90%/90_5_Mouth_Lateral_Self17.mp4', 'path': 'Research/All noisy HS/5 HS 90%/90_5_Mouth_Lateral_Self17.mp4'},
    {'name': 'Research/All noisy HS/3 HS 90%/90_3_Neutral_Circle_Down6.mp4', 'path': 'Research/All noisy HS/3 HS 90%/90_3_Neutral_Circle_Down6.mp4'},
    {'name': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Elbow_Lateral_Down27.mp4', 'path': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Elbow_Lateral_Down27.mp4'},
    {'name': 'Research/All noisy HS/K HS 90%/90_K_Elbow_Lateral_Forward27.mp4', 'path': 'Research/All noisy HS/K HS 90%/90_K_Elbow_Lateral_Forward27.mp4'},
    {'name': 'Research/All noisy HS/D HS 90%/90_D_Neutral_Circle_Forward4.mp4', 'path': 'Research/All noisy HS/D HS 90%/90_D_Neutral_Circle_Forward4.mp4'},
    {'name': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Neutral_Lateral_Self10.mp4', 'path': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Neutral_Lateral_Self10.mp4'},
    {'name': 'Research/All noisy HS/W HS 90%/90_W_Elbow_Lateral_Forward26.mp4', 'path': 'Research/All noisy HS/W HS 90%/90_W_Elbow_Lateral_Forward26.mp4'},
    {'name': 'Research/All noisy HS/W HS 90%/90_W_Neutral_Twist_Down4.mp4', 'path': 'Research/All noisy HS/W HS 90%/90_W_Neutral_Twist_Down4.mp4'},
    {'name': 'Research/All noisy HS/X HS 90%/90_X_Elbow_Circle_Self23.mp4', 'path': 'Research/All noisy HS/X HS 90%/90_X_Elbow_Circle_Self23.mp4'},
    {'name': 'Research/All noisy HS/4 HS 90%/90_4_Mouth_Circle_Down15.mp4', 'path': 'Research/All noisy HS/4 HS 90%/90_4_Mouth_Circle_Down15.mp4'},
    {'name': 'Research/All noisy HS/4 HS 90%/90_4_Elbow_Circle_Self23.mp4', 'path': 'Research/All noisy HS/4 HS 90%/90_4_Elbow_Circle_Self23.mp4'},
    {'name': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Elbow_Twist_Self20.mp4', 'path': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Elbow_Twist_Self20.mp4'},
    {'name': 'Research/All noisy HS/U HS 90%/90_U_Neutral_Circle_Self5.mp4', 'path': 'Research/All noisy HS/U HS 90%/90_U_Neutral_Circle_Self5.mp4'},
    {'name': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Elbow_Circle_Down26.mp4', 'path': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Elbow_Circle_Down26.mp4'},
    {'name': 'Research/All noisy HS/F HS 90%/90_F_Elbow_Circle_Forward23.mp4', 'path': 'Research/All noisy HS/F HS 90%/90_F_Elbow_Circle_Forward23.mp4'},
    {'name': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Mouth_Twist_Self11.mp4', 'path': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Mouth_Twist_Self11.mp4'},
    {'name': 'Research/All noisy HS/X HS 90%/90_X_Mouth_Circle_Self14.mp4', 'path': 'Research/All noisy HS/X HS 90%/90_X_Mouth_Circle_Self14.mp4'},
    {'name': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Mouth_Twist_Self11.mp4', 'path': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Mouth_Twist_Self11.mp4'},
    {'name': 'Research/All noisy HS/G HS 90%/90_G_Neutral_Circle_Self5.mp4', 'path': 'Research/All noisy HS/G HS 90%/90_G_Neutral_Circle_Self5.mp4'},
    {'name': 'Research/All noisy HS/F HS 90%/90_F_Elbow_Lateral_Self27.mp4', 'path': 'Research/All noisy HS/F HS 90%/90_F_Elbow_Lateral_Self27.mp4'},
    {'name': 'Research/All noisy HS/X HS 90%/90_X_Neutral_Circle_Self5.mp4', 'path': 'Research/All noisy HS/X HS 90%/90_X_Neutral_Circle_Self5.mp4'},
    {'name': 'Research/All noisy HS/F HS 90%/90_F_Mouth_Circle_Forward14.mp4', 'path': 'Research/All noisy HS/F HS 90%/90_F_Mouth_Circle_Forward14.mp4'},
    {'name': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Mouth_Twist_Forward10.mp4', 'path': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Mouth_Twist_Forward10.mp4'},
    {'name': 'Research/All noisy HS/3 HS 90%/90_3_Neutral_Lateral_Self8.mp4', 'path': 'Research/All noisy HS/3 HS 90%/90_3_Neutral_Lateral_Self8.mp4'},
    {'name': 'Research/All noisy HS/10 HS 90%/90_10_Elbow_Lateral_Down30.mp4', 'path': 'Research/All noisy HS/10 HS 90%/90_10_Elbow_Lateral_Down30.mp4'},
    {'name': 'Research/All noisy HS/C HS 90%/90_C_Neutral_Twist_Self2.mp4', 'path': 'Research/All noisy HS/C HS 90%/90_C_Neutral_Twist_Self2.mp4'},
    {'name': 'Research/All noisy HS/V HS 90%/90_V_Mouth_Twist_Self14.mp4', 'path': 'Research/All noisy HS/V HS 90%/90_V_Mouth_Twist_Self14.mp4'},
    {'name': 'Research/All noisy HS/D HS 90%/90_D_Neutral_Lateral_Forward7.mp4', 'path': 'Research/All noisy HS/D HS 90%/90_D_Neutral_Lateral_Forward7.mp4'},
    {'name': 'Research/All noisy HS/L HS 90%/90_L_Elbow_Circle_Self23.mp4', 'path': 'Research/All noisy HS/L HS 90%/90_L_Elbow_Circle_Self23.mp4'},
    {'name': 'Research/All noisy HS/3 HS 90%/90_3_Mouth_Lateral_Down18.mp4', 'path': 'Research/All noisy HS/3 HS 90%/90_3_Mouth_Lateral_Down18.mp4'},
    {'name': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Neutral_Twist_Down4.mp4', 'path': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Neutral_Twist_Down4.mp4'},
    {'name': 'Research/All noisy HS/1 HS 90%/90_1_Neutral_Circle_Self5.mp4', 'path': 'Research/All noisy HS/1 HS 90%/90_1_Neutral_Circle_Self5.mp4'},
    {'name': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Elbow_Lateral_Down28.mp4', 'path': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Elbow_Lateral_Down28.mp4'},
    {'name': 'Research/All noisy HS/X HS 90%/90_X_Elbow_Twist_Self20.mp4', 'path': 'Research/All noisy HS/X HS 90%/90_X_Elbow_Twist_Self20.mp4'},
    {'name': 'Research/All noisy HS/R HS 90%/90_R_Mouth_Twist_Down14.mp4', 'path': 'Research/All noisy HS/R HS 90%/90_R_Mouth_Twist_Down14.mp4'},
    {'name': 'Research/All noisy HS/A HS 90%/90_A_Elbow_Twist_Down24.mp4', 'path': 'Research/All noisy HS/A HS 90%/90_A_Elbow_Twist_Down24.mp4'},
    {'name': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Mouth_Lateral_Forward18.mp4', 'path': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Mouth_Lateral_Forward18.mp4'},
    {'name': 'Research/All noisy HS/4 HS 90%/90_4_Neutral_Twist_Forward1.mp4', 'path': 'Research/All noisy HS/4 HS 90%/90_4_Neutral_Twist_Forward1.mp4'},
    {'name': 'Research/All noisy HS/5 HS 90%/90_5_Neutral_Circle_Down6.mp4', 'path': 'Research/All noisy HS/5 HS 90%/90_5_Neutral_Circle_Down6.mp4'},
    {'name': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Neutral_Twist_Down3.mp4', 'path': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Neutral_Twist_Down3.mp4'},
    {'name': 'Research/All noisy HS/R HS 90%/90_R_Elbow_Lateral_Self30.mp4', 'path': 'Research/All noisy HS/R HS 90%/90_R_Elbow_Lateral_Self30.mp4'},
    {'name': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Neutral_Twist_Down3.mp4', 'path': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Neutral_Twist_Down3.mp4'},
    {'name': 'Research/All noisy HS/4 HS 90%/90_4_Mouth_Lateral_Forward16.mp4', 'path': 'Research/All noisy HS/4 HS 90%/90_4_Mouth_Lateral_Forward16.mp4'},
    {'name': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Elbow_Circle_Forward22.mp4', 'path': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Elbow_Circle_Forward22.mp4'},
    {'name': 'Research/All noisy HS/Y HS 90%/90_Y_Elbow_Lateral_Down29.mp4', 'path': 'Research/All noisy HS/Y HS 90%/90_Y_Elbow_Lateral_Down29.mp4'},
    {'name': 'Research/All noisy HS/Y HS 90%/90_Y_Neutral_Twist_Self3.mp4', 'path': 'Research/All noisy HS/Y HS 90%/90_Y_Neutral_Twist_Self3.mp4'},
    {'name': 'Research/All noisy HS/5 HS 90%/90_5_Mouth_Lateral_Forward16.mp4', 'path': 'Research/All noisy HS/5 HS 90%/90_5_Mouth_Lateral_Forward16.mp4'},
    {'name': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Elbow_Lateral_Forward27.mp4', 'path': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Elbow_Lateral_Forward27.mp4'},
    {'name': 'Research/All noisy HS/W HS 90%/90_W_Elbow_Lateral_Down28.mp4', 'path': 'Research/All noisy HS/W HS 90%/90_W_Elbow_Lateral_Down28.mp4'},
    {'name': 'Research/All noisy HS/10 HS 90%/90_10_Neutral_Twist_Forward1.mp4', 'path': 'Research/All noisy HS/10 HS 90%/90_10_Neutral_Twist_Forward1.mp4'},
    {'name': 'Research/All noisy HS/10 HS 90%/90_10_Elbow_Circle_Forward24.mp4', 'path': 'Research/All noisy HS/10 HS 90%/90_10_Elbow_Circle_Forward24.mp4'},
    {'name': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Neutral_Circle_Down8.mp4', 'path': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Neutral_Circle_Down8.mp4'},
    {'name': 'Research/All noisy HS/3 HS 90%/90_3_Mouth_Circle_Forward13.mp4', 'path': 'Research/All noisy HS/3 HS 90%/90_3_Mouth_Circle_Forward13.mp4'},
    {'name': 'Research/All noisy HS/V HS 90%/90_V_Elbow_Twist_Self23.mp4', 'path': 'Research/All noisy HS/V HS 90%/90_V_Elbow_Twist_Self23.mp4'},
    {'name': 'Research/All noisy HS/C HS 90%/90_C_Mouth_Twist_Forward10.mp4', 'path': 'Research/All noisy HS/C HS 90%/90_C_Mouth_Twist_Forward10.mp4'},
    {'name': 'Research/All noisy HS/X HS 90%/90_X_Elbow_Circle_Down24.mp4', 'path': 'Research/All noisy HS/X HS 90%/90_X_Elbow_Circle_Down24.mp4'},
    {'name': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Elbow_Twist_Down21.mp4', 'path': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Elbow_Twist_Down21.mp4'},
    {'name': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Elbow_Lateral_Forward25.mp4', 'path': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Elbow_Lateral_Forward25.mp4'},
    {'name': 'Research/All noisy HS/F HS 90%/90_F_Elbow_Twist_Down22.mp4', 'path': 'Research/All noisy HS/F HS 90%/90_F_Elbow_Twist_Down22.mp4'},
    {'name': 'Research/All noisy HS/F HS 90%/90_F_Elbow_Circle_Self24.mp4', 'path': 'Research/All noisy HS/F HS 90%/90_F_Elbow_Circle_Self24.mp4'},
    {'name': 'Research/All noisy HS/L HS 90%/90_L_Neutral_Lateral_Self8.mp4', 'path': 'Research/All noisy HS/L HS 90%/90_L_Neutral_Lateral_Self8.mp4'},
    {'name': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Elbow_Twist_Forward19.mp4', 'path': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Elbow_Twist_Forward19.mp4'},
    {'name': 'Research/All noisy HS/L HS 90%/90_L_Elbow_Twist_Down21.mp4', 'path': 'Research/All noisy HS/L HS 90%/90_L_Elbow_Twist_Down21.mp4'},
    {'name': 'Research/All noisy HS/C HS 90%/90_C_Mouth_Twist_Self11.mp4', 'path': 'Research/All noisy HS/C HS 90%/90_C_Mouth_Twist_Self11.mp4'},
    {'name': 'Research/All noisy HS/E HS 90%/90_E_Elbow_Twist_Self20.mp4', 'path': 'Research/All noisy HS/E HS 90%/90_E_Elbow_Twist_Self20.mp4'},
    {'name': 'Research/All noisy HS/V HS 90%/90_V_Elbow_Circle_Down27.mp4', 'path': 'Research/All noisy HS/V HS 90%/90_V_Elbow_Circle_Down27.mp4'},
    {'name': 'Research/All noisy HS/5 HS 90%/90_5_Neutral_Circle_Self5.mp4', 'path': 'Research/All noisy HS/5 HS 90%/90_5_Neutral_Circle_Self5.mp4'},
    {'name': 'Research/All noisy HS/E HS 90%/90_E_Neutral_Lateral_Down9.mp4', 'path': 'Research/All noisy HS/E HS 90%/90_E_Neutral_Lateral_Down9.mp4'},
    {'name': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Mouth_Twist_Self11.mp4', 'path': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Mouth_Twist_Self11.mp4'},
    {'name': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Neutral_Lateral_Self9.mp4', 'path': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Neutral_Lateral_Self9.mp4'},
    {'name': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Mouth_Circle_Forward13.mp4', 'path': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Mouth_Circle_Forward13.mp4'},
    {'name': 'Research/All noisy HS/8 HS 90%/90_8_Elbow_Circle_Forward23.mp4', 'path': 'Research/All noisy HS/8 HS 90%/90_8_Elbow_Circle_Forward23.mp4'},
    {'name': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Elbow_Lateral_Self26.mp4', 'path': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Elbow_Lateral_Self26.mp4'},
    {'name': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Elbow_Circle_Forward23.mp4', 'path': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Elbow_Circle_Forward23.mp4'},
    {'name': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Neutral_Circle_Self5.mp4', 'path': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Neutral_Circle_Self5.mp4'},
    {'name': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Neutral_Lateral_Forward7.mp4', 'path': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Neutral_Lateral_Forward7.mp4'},
    {'name': 'Research/All noisy HS/F HS 90%/90_F_Neutral_Circle_Forward4.mp4', 'path': 'Research/All noisy HS/F HS 90%/90_F_Neutral_Circle_Forward4.mp4'},
    {'name': 'Research/All noisy HS/W HS 90%/90_W_Elbow_Twist_Self21.mp4', 'path': 'Research/All noisy HS/W HS 90%/90_W_Elbow_Twist_Self21.mp4'},
    {'name': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Mouth_Circle_Down15.mp4', 'path': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Mouth_Circle_Down15.mp4'},
    {'name': 'Research/All noisy HS/F HS 90%/90_F_Neutral_Circle_Down6.mp4', 'path': 'Research/All noisy HS/F HS 90%/90_F_Neutral_Circle_Down6.mp4'},
    {'name': 'Research/Excel books/Part 4 .xlsx', 'path': 'Research/Excel books/Part 4 .xlsx'},
    {'name': 'Research/All noisy HS/S HS 90%/90_S_Neutral_Lateral_Self8.mp4', 'path': 'Research/All noisy HS/S HS 90%/90_S_Neutral_Lateral_Self8.mp4'},
    {'name': 'Research/All noisy HS/10 HS 90%/90_10_Mouth_Twist_Self13.mp4', 'path': 'Research/All noisy HS/10 HS 90%/90_10_Mouth_Twist_Self13.mp4'},
    {'name': 'Research/All noisy HS/S HS 90%/90_S_Neutral_Lateral_Down9.mp4', 'path': 'Research/All noisy HS/S HS 90%/90_S_Neutral_Lateral_Down9.mp4'},
    {'name': 'Research/All noisy HS/U HS 90%/90_U_Mouth_Lateral_Forward17.mp4', 'path': 'Research/All noisy HS/U HS 90%/90_U_Mouth_Lateral_Forward17.mp4'},
    {'name': 'Research/All noisy HS/O HS 90%/90_O_Mouth_Twist_Self13.mp4', 'path': 'Research/All noisy HS/O HS 90%/90_O_Mouth_Twist_Self13.mp4'},
    {'name': 'Research/All noisy HS/5 HS 90%/90_5_Elbow_Twist_Down21.mp4', 'path': 'Research/All noisy HS/5 HS 90%/90_5_Elbow_Twist_Down21.mp4'},
    {'name': 'Research/All noisy HS/A HS 90%/90_A_Mouth_Twist_Self14.mp4', 'path': 'Research/All noisy HS/A HS 90%/90_A_Mouth_Twist_Self14.mp4'},
    {'name': 'Research/All noisy HS/E HS 90%/90_E_Mouth_Twist_Forward10.mp4', 'path': 'Research/All noisy HS/E HS 90%/90_E_Mouth_Twist_Forward10.mp4'},
    {'name': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Neutral_Lateral_Down9.mp4', 'path': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Neutral_Lateral_Down9.mp4'},
    {'name': 'Research/All noisy HS/K HS 90%/90_K_Mouth_Lateral_Self19.mp4', 'path': 'Research/All noisy HS/K HS 90%/90_K_Mouth_Lateral_Self19.mp4'},
    {'name': 'Research/All noisy HS/D HS 90%/90_D_Elbow_Twist_Self20.mp4', 'path': 'Research/All noisy HS/D HS 90%/90_D_Elbow_Twist_Self20.mp4'},
    {'name': 'Research/All noisy HS/G HS 90%/90_G_Mouth_Lateral_Forward16.mp4', 'path': 'Research/All noisy HS/G HS 90%/90_G_Mouth_Lateral_Forward16.mp4'},
    {'name': 'Research/All noisy HS/C HS 90%/90_C_Elbow_Circle_Forward22.mp4', 'path': 'Research/All noisy HS/C HS 90%/90_C_Elbow_Circle_Forward22.mp4'},
    {'name': 'Research/All noisy HS/L HS 90%/90_L_Mouth_Twist_Down12.mp4', 'path': 'Research/All noisy HS/L HS 90%/90_L_Mouth_Twist_Down12.mp4'},
    {'name': 'Research/All noisy HS/3 HS 90%/90_3_Neutral_Twist_Down3.mp4', 'path': 'Research/All noisy HS/3 HS 90%/90_3_Neutral_Twist_Down3.mp4'},
    {'name': 'Research/All noisy HS/W HS 90%/90_W_Mouth_Circle_Self15.mp4', 'path': 'Research/All noisy HS/W HS 90%/90_W_Mouth_Circle_Self15.mp4'},
    {'name': 'Research/All noisy HS/8 HS 90%/90_8_Elbow_Circle_Down25.mp4', 'path': 'Research/All noisy HS/8 HS 90%/90_8_Elbow_Circle_Down25.mp4'},
    {'name': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Neutral_Twist_Self2.mp4', 'path': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Neutral_Twist_Self2.mp4'},
    {'name': 'Research/All noisy HS/R HS 90%/90_R_Neutral_Lateral_Forward9.mp4', 'path': 'Research/All noisy HS/R HS 90%/90_R_Neutral_Lateral_Forward9.mp4'},
    {'name': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Neutral_Lateral_Self9.mp4', 'path': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Neutral_Lateral_Self9.mp4'},
    {'name': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Elbow_Lateral_Self23.mp4', 'path': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Elbow_Lateral_Self23.mp4'},
    {'name': 'Research/All noisy HS/10 HS 90%/90_10_Mouth_Lateral_Self19.mp4', 'path': 'Research/All noisy HS/10 HS 90%/90_10_Mouth_Lateral_Self19.mp4'},
    {'name': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Elbow_Circle_Self23.mp4', 'path': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Elbow_Circle_Self23.mp4'},
    {'name': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Mouth_Circle_Self14.mp4', 'path': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Mouth_Circle_Self14.mp4'},
    {'name': 'Research/All noisy HS/4 HS 90%/90_4_Elbow_Twist_Forward19.mp4', 'path': 'Research/All noisy HS/4 HS 90%/90_4_Elbow_Twist_Forward19.mp4'},
    {'name': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Mouth_Circle_Forward13.mp4', 'path': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Mouth_Circle_Forward13.mp4'},
    {'name': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Elbow_Twist_Self20.mp4', 'path': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Elbow_Twist_Self20.mp4'},
    {'name': 'Research/All noisy HS/4 HS 90%/90_4_Mouth_Twist_Forward10.mp4', 'path': 'Research/All noisy HS/4 HS 90%/90_4_Mouth_Twist_Forward10.mp4'},
    {'name': 'Research/All noisy HS/C HS 90%/90_C_Mouth_Circle_Forward13.mp4', 'path': 'Research/All noisy HS/C HS 90%/90_C_Mouth_Circle_Forward13.mp4'},
    {'name': 'Research/All noisy HS/U HS 90%/90_U_Mouth_Circle_Self14.mp4', 'path': 'Research/All noisy HS/U HS 90%/90_U_Mouth_Circle_Self14.mp4'},
    {'name': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Mouth_Twist_Forward10.mp4', 'path': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Mouth_Twist_Forward10.mp4'},
    {'name': 'Research/All noisy HS/10 HS 90%/90_10_Neutral_Circle_Self6.mp4', 'path': 'Research/All noisy HS/10 HS 90%/90_10_Neutral_Circle_Self6.mp4'},
    {'name': 'Research/All noisy HS/1 HS 90%/90_1_Elbow_Circle_Forward22.mp4', 'path': 'Research/All noisy HS/1 HS 90%/90_1_Elbow_Circle_Forward22.mp4'},
    {'name': 'Research/All noisy HS/O HS 90%/90_O_Mouth_Circle_Forward15.mp4', 'path': 'Research/All noisy HS/O HS 90%/90_O_Mouth_Circle_Forward15.mp4'},
    {'name': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Elbow_Twist_Down21.mp4', 'path': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Elbow_Twist_Down21.mp4'},
    {'name': 'Research/All noisy HS/S HS 90%/90_S_Elbow_Lateral_Self27.mp4', 'path': 'Research/All noisy HS/S HS 90%/90_S_Elbow_Lateral_Self27.mp4'},
    {'name': 'Research/All noisy HS/S HS 90%/90_S_Neutral_Circle_Forward4.mp4', 'path': 'Research/All noisy HS/S HS 90%/90_S_Neutral_Circle_Forward4.mp4'},
    {'name': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Neutral_Lateral_Self8.mp4', 'path': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Neutral_Lateral_Self8.mp4'},
    {'name': 'Research/All noisy HS/R HS 90%/90_R_Elbow_Circle_Forward26.mp4', 'path': 'Research/All noisy HS/R HS 90%/90_R_Elbow_Circle_Forward26.mp4'},
    {'name': 'Research/All noisy HS/B HS 90%/90_B_Neutral_Lateral_Forward8.mp4', 'path': 'Research/All noisy HS/B HS 90%/90_B_Neutral_Lateral_Forward8.mp4'},
    {'name': 'Research/All noisy HS/i HS 90%/90_I_Neutral_Circle_Forward4.mp4', 'path': 'Research/All noisy HS/i HS 90%/90_I_Neutral_Circle_Forward4.mp4'},
    {'name': 'Research/All noisy HS/4 HS 90%/90_4_Mouth_Circle_Forward13.mp4', 'path': 'Research/All noisy HS/4 HS 90%/90_4_Mouth_Circle_Forward13.mp4'},
    {'name': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Mouth_Lateral_Forward16.mp4', 'path': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Mouth_Lateral_Forward16.mp4'},
    {'name': 'Research/All noisy HS/K HS 90%/90_K_Neutral_Twist_Down3.mp4', 'path': 'Research/All noisy HS/K HS 90%/90_K_Neutral_Twist_Down3.mp4'},
    {'name': 'Research/All noisy HS/W HS 90%/90_W_Elbow_Circle_Self24.mp4', 'path': 'Research/All noisy HS/W HS 90%/90_W_Elbow_Circle_Self24.mp4'},
    {'name': 'Research/All noisy HS/O HS 90%/90_O_Mouth_Circle_Down17.mp4', 'path': 'Research/All noisy HS/O HS 90%/90_O_Mouth_Circle_Down17.mp4'},
    {'name': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Mouth_Lateral_Forward16.mp4', 'path': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Mouth_Lateral_Forward16.mp4'},
    {'name': 'Research/All noisy HS/A HS 90%/90_A_Neutral_Twist_Forward4.mp4', 'path': 'Research/All noisy HS/A HS 90%/90_A_Neutral_Twist_Forward4.mp4'},
    {'name': 'Research/All noisy HS/Y HS 90%/90_Y_Neutral_Twist_Down4.mp4', 'path': 'Research/All noisy HS/Y HS 90%/90_Y_Neutral_Twist_Down4.mp4'},
    {'name': 'Research/All noisy HS/i HS 90%/90_I_Elbow_Twist_Forward22.mp4', 'path': 'Research/All noisy HS/i HS 90%/90_I_Elbow_Twist_Forward22.mp4'},
    {'name': 'Research/All noisy HS/5 HS 90%/90_5_Mouth_Circle_Self14.mp4', 'path': 'Research/All noisy HS/5 HS 90%/90_5_Mouth_Circle_Self14.mp4'},
    {'name': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Neutral_Circle_Self6.mp4', 'path': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Neutral_Circle_Self6.mp4'},
    {'name': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Mouth_Twist_Down12.mp4', 'path': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Mouth_Twist_Down12.mp4'},
    {'name': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Neutral_Twist_Forward1.mp4', 'path': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Neutral_Twist_Forward1.mp4'},
    {'name': 'Research/All noisy HS/W HS 90%/90_W_Neutral_Lateral_Self9.mp4', 'path': 'Research/All noisy HS/W HS 90%/90_W_Neutral_Lateral_Self9.mp4'},
    {'name': 'Research/All noisy HS/C HS 90%/90_C_Mouth_Twist_Down12.mp4', 'path': 'Research/All noisy HS/C HS 90%/90_C_Mouth_Twist_Down12.mp4'},
    {'name': 'Research/All noisy HS/W HS 90%/90_W_Mouth_Circle_Forward14.mp4', 'path': 'Research/All noisy HS/W HS 90%/90_W_Mouth_Circle_Forward14.mp4'},
    {'name': 'Research/All noisy HS/5 HS 90%/90_5_Mouth_Lateral_Down18.mp4', 'path': 'Research/All noisy HS/5 HS 90%/90_5_Mouth_Lateral_Down18.mp4'},
    {'name': 'Research/All noisy HS/3 HS 90%/90_3_Mouth_Twist_Down12.mp4', 'path': 'Research/All noisy HS/3 HS 90%/90_3_Mouth_Twist_Down12.mp4'},
    {'name': 'Research/All noisy HS/O HS 90%/90_O_Neutral_Twist_Down4.mp4', 'path': 'Research/All noisy HS/O HS 90%/90_O_Neutral_Twist_Down4.mp4'},
    {'name': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Elbow_Circle_Self23.mp4', 'path': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Elbow_Circle_Self23.mp4'},
    {'name': 'Research/All noisy HS/Y HS 90%/90_Y_Elbow_Lateral_Self28.mp4', 'path': 'Research/All noisy HS/Y HS 90%/90_Y_Elbow_Lateral_Self28.mp4'},
    {'name': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Neutral_Circle_Self5.mp4', 'path': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Neutral_Circle_Self5.mp4'},
    {'name': 'Research/All noisy HS/W HS 90%/90_W_Neutral_Circle_Down7.mp4', 'path': 'Research/All noisy HS/W HS 90%/90_W_Neutral_Circle_Down7.mp4'},
    {'name': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Neutral_Circle_Forward4.mp4', 'path': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Neutral_Circle_Forward4.mp4'},
    {'name': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Elbow_Twist_Down21.mp4', 'path': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Elbow_Twist_Down21.mp4'},
    {'name': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Elbow_Twist_Forward19.mp4', 'path': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Elbow_Twist_Forward19.mp4'},
    {'name': 'Research/All noisy HS/D HS 90%/90_D_Neutral_Twist_Down3.mp4', 'path': 'Research/All noisy HS/D HS 90%/90_D_Neutral_Twist_Down3.mp4'},
    {'name': 'Research/All noisy HS/S HS 90%/90_S_Mouth_Twist_Forward10.mp4', 'path': 'Research/All noisy HS/S HS 90%/90_S_Mouth_Twist_Forward10.mp4'},
    {'name': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Neutral_Circle_Forward4.mp4', 'path': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Neutral_Circle_Forward4.mp4'},
    {'name': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Elbow_Lateral_Self27.mp4', 'path': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Elbow_Lateral_Self27.mp4'},
    {'name': 'Research/All noisy HS/A HS 90%/90_A_Neutral_Circle_Forward1.mp4', 'path': 'Research/All noisy HS/A HS 90%/90_A_Neutral_Circle_Forward1.mp4'},
    {'name': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Neutral_Circle_Self5.mp4', 'path': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Neutral_Circle_Self5.mp4'},
    {'name': 'Research/All noisy HS/A HS 90%/90_A_Neutral_Circle_Self2.mp4', 'path': 'Research/All noisy HS/A HS 90%/90_A_Neutral_Circle_Self2.mp4'},
    {'name': 'Research/All noisy HS/G HS 90%/90_G_Elbow_Lateral_Self28.mp4', 'path': 'Research/All noisy HS/G HS 90%/90_G_Elbow_Lateral_Self28.mp4'},
    {'name': 'Research/All noisy HS/X HS 90%/90_X_Elbow_Twist_Down21.mp4', 'path': 'Research/All noisy HS/X HS 90%/90_X_Elbow_Twist_Down21.mp4'},
    {'name': 'Research/All noisy HS/E HS 90%/90_E_Neutral_Circle_Forward4.mp4', 'path': 'Research/All noisy HS/E HS 90%/90_E_Neutral_Circle_Forward4.mp4'},
    {'name': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Mouth_Twist_Self11.mp4', 'path': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Mouth_Twist_Self11.mp4'},
    {'name': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Neutral_Twist_Forward1.mp4', 'path': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Neutral_Twist_Forward1.mp4'},
    {'name': 'Research/All noisy HS/K HS 90%/90_K_Neutral_Circle_Forward4.mp4', 'path': 'Research/All noisy HS/K HS 90%/90_K_Neutral_Circle_Forward4.mp4'},
    {'name': 'Research/All noisy HS/3 HS 90%/90_3_Neutral_Twist_Forward1.mp4', 'path': 'Research/All noisy HS/3 HS 90%/90_3_Neutral_Twist_Forward1.mp4'},
    {'name': 'Research/All noisy HS/i HS 90%/90_I_Neutral_Twist_Forward1.mp4', 'path': 'Research/All noisy HS/i HS 90%/90_I_Neutral_Twist_Forward1.mp4'},
    {'name': 'Research/All noisy HS/1 HS 90%/90_1_Mouth_Circle_Down15.mp4', 'path': 'Research/All noisy HS/1 HS 90%/90_1_Mouth_Circle_Down15.mp4'},
    {'name': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Elbow_Circle_Self24.mp4', 'path': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Elbow_Circle_Self24.mp4'},
    {'name': 'Research/All noisy HS/8 HS 90%/90_8_Elbow_Twist_Self21.mp4', 'path': 'Research/All noisy HS/8 HS 90%/90_8_Elbow_Twist_Self21.mp4'},
    {'name': 'Research/All noisy HS/D HS 90%/90_D_Elbow_Lateral_Forward25.mp4', 'path': 'Research/All noisy HS/D HS 90%/90_D_Elbow_Lateral_Forward25.mp4'},
    {'name': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Elbow_Twist_Down21.mp4', 'path': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Elbow_Twist_Down21.mp4'},
    {'name': 'Research/All noisy HS/R HS 90%/90_R_Mouth_Lateral_Self20.mp4', 'path': 'Research/All noisy HS/R HS 90%/90_R_Mouth_Lateral_Self20.mp4'},
    {'name': 'Research/All noisy HS/5 HS 90%/90_5_Mouth_Twist_Self11.mp4', 'path': 'Research/All noisy HS/5 HS 90%/90_5_Mouth_Twist_Self11.mp4'},
    {'name': 'Research/All noisy HS/A HS 90%/90_A_Elbow_Lateral_Down30.mp4', 'path': 'Research/All noisy HS/A HS 90%/90_A_Elbow_Lateral_Down30.mp4'},
    {'name': 'Research/All noisy HS/4 HS 90%/90_4_Mouth_Twist_Self11.mp4', 'path': 'Research/All noisy HS/4 HS 90%/90_4_Mouth_Twist_Self11.mp4'},
    {'name': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Neutral_Lateral_Forward8.mp4', 'path': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Neutral_Lateral_Forward8.mp4'},
    {'name': 'Research/All noisy HS/O HS 90%/90_O_Mouth_Twist_Down14.mp4', 'path': 'Research/All noisy HS/O HS 90%/90_O_Mouth_Twist_Down14.mp4'},
    {'name': 'Research/All noisy HS/E HS 90%/90_E_Neutral_Lateral_Self8.mp4', 'path': 'Research/All noisy HS/E HS 90%/90_E_Neutral_Lateral_Self8.mp4'},
    {'name': 'Research/All noisy HS/10 HS 90%/90_10_Neutral_Lateral_Down11.mp4', 'path': 'Research/All noisy HS/10 HS 90%/90_10_Neutral_Lateral_Down11.mp4'},
    {'name': 'Research/All noisy HS/U HS 90%/90_U_Elbow_Circle_Down27.mp4', 'path': 'Research/All noisy HS/U HS 90%/90_U_Elbow_Circle_Down27.mp4'},
    {'name': 'Research/All noisy HS/8 HS 90%/90_8_Neutral_Twist_Forward1.mp4', 'path': 'Research/All noisy HS/8 HS 90%/90_8_Neutral_Twist_Forward1.mp4'},
    {'name': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Neutral_Circle_Forward4.mp4', 'path': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Neutral_Circle_Forward4.mp4'},
    {'name': 'Research/All noisy HS/F HS 90%/90_F_Elbow_Circle_Down25.mp4', 'path': 'Research/All noisy HS/F HS 90%/90_F_Elbow_Circle_Down25.mp4'},
    {'name': 'Research/All noisy HS/i HS 90%/90_I_Neutral_Twist_Self2.mp4', 'path': 'Research/All noisy HS/i HS 90%/90_I_Neutral_Twist_Self2.mp4'},
    {'name': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Mouth_Twist_Self11.mp4', 'path': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Mouth_Twist_Self11.mp4'},
    {'name': 'Research/All noisy HS/O HS 90%/90_O_Mouth_Circle_Self16.mp4', 'path': 'Research/All noisy HS/O HS 90%/90_O_Mouth_Circle_Self16.mp4'},
    {'name': 'Research/All noisy HS/E HS 90%/90_E_Mouth_Circle_Forward13.mp4', 'path': 'Research/All noisy HS/E HS 90%/90_E_Mouth_Circle_Forward13.mp4'},
    {'name': 'Research/All noisy HS/10 HS 90%/90_10_Neutral_Circle_Forward5.mp4', 'path': 'Research/All noisy HS/10 HS 90%/90_10_Neutral_Circle_Forward5.mp4'},
    {'name': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Mouth_Lateral_Self17.mp4', 'path': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Mouth_Lateral_Self17.mp4'},
    {'name': 'Research/All noisy HS/X HS 90%/90_X_Elbow_Lateral_Down28.mp4', 'path': 'Research/All noisy HS/X HS 90%/90_X_Elbow_Lateral_Down28.mp4'},
    {'name': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Elbow_Lateral_Self26.mp4', 'path': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Elbow_Lateral_Self26.mp4'},
    {'name': 'Research/All noisy HS/K HS 90%/90_K_Elbow_Lateral_Self28.mp4', 'path': 'Research/All noisy HS/K HS 90%/90_K_Elbow_Lateral_Self28.mp4'},
    {'name': 'Research/All noisy HS/L HS 90%/90_L_Elbow_Twist_Self20.mp4', 'path': 'Research/All noisy HS/L HS 90%/90_L_Elbow_Twist_Self20.mp4'},
    {'name': 'Research/All noisy HS/5 HS 90%/90_5_Neutral_Twist_Down3.mp4', 'path': 'Research/All noisy HS/5 HS 90%/90_5_Neutral_Twist_Down3.mp4'},
    {'name': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Neutral_Lateral_Forward7.mp4', 'path': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Neutral_Lateral_Forward7.mp4'},
    {'name': 'Research/All noisy HS/S HS 90%/90_S_Neutral_Circle_Down6.mp4', 'path': 'Research/All noisy HS/S HS 90%/90_S_Neutral_Circle_Down6.mp4'},
    {'name': 'Research/All noisy HS/A HS 90%/90_A_Mouth_Circle_Forward16.mp4', 'path': 'Research/All noisy HS/A HS 90%/90_A_Mouth_Circle_Forward16.mp4'},
    {'name': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Mouth_Lateral_Down18.mp4', 'path': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Mouth_Lateral_Down18.mp4'},
    {'name': 'Research/All noisy HS/D HS 90%/90_D_Elbow_Twist_Forward19.mp4', 'path': 'Research/All noisy HS/D HS 90%/90_D_Elbow_Twist_Forward19.mp4'},
    {'name': 'Research/All noisy HS/4 HS 90%/90_4_Neutral_Circle_Forward4.mp4', 'path': 'Research/All noisy HS/4 HS 90%/90_4_Neutral_Circle_Forward4.mp4'},
    {'name': 'Research/All noisy HS/1 HS 90%/90_1_Mouth_Circle_Forward13.mp4', 'path': 'Research/All noisy HS/1 HS 90%/90_1_Mouth_Circle_Forward13.mp4'},
    {'name': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Mouth_Circle_Forward14.mp4', 'path': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Mouth_Circle_Forward14.mp4'},
    {'name': 'Research/All noisy HS/S HS 90%/90_S_Elbow_Twist_Forward19.mp4', 'path': 'Research/All noisy HS/S HS 90%/90_S_Elbow_Twist_Forward19.mp4'},
    {'name': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Elbow_Lateral_Forward26.mp4', 'path': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Elbow_Lateral_Forward26.mp4'},
    {'name': 'Research/All noisy HS/3 HS 90%/90_3_Neutral_Twist_Self2.mp4', 'path': 'Research/All noisy HS/3 HS 90%/90_3_Neutral_Twist_Self2.mp4'},
    {'name': 'Research/All noisy HS/W HS 90%/90_W_Elbow_Lateral_Self27.mp4', 'path': 'Research/All noisy HS/W HS 90%/90_W_Elbow_Lateral_Self27.mp4'},
    {'name': 'Research/All noisy HS/C HS 90%/90_C_Mouth_Circle_Self14.mp4', 'path': 'Research/All noisy HS/C HS 90%/90_C_Mouth_Circle_Self14.mp4'},
    {'name': 'Research/All noisy HS/5 HS 90%/90_5_Mouth_Twist_Forward10.mp4', 'path': 'Research/All noisy HS/5 HS 90%/90_5_Mouth_Twist_Forward10.mp4'},
    {'name': 'Research/All noisy HS/V HS 90%/90_V_Elbow_Lateral_Self29.mp4', 'path': 'Research/All noisy HS/V HS 90%/90_V_Elbow_Lateral_Self29.mp4'},
    {'name': 'Research/All noisy HS/D HS 90%/90_D_Neutral_Lateral_Self8.mp4', 'path': 'Research/All noisy HS/D HS 90%/90_D_Neutral_Lateral_Self8.mp4'},
    {'name': 'Research/All noisy HS/V HS 90%/90_V_Mouth_Circle_Self17.mp4', 'path': 'Research/All noisy HS/V HS 90%/90_V_Mouth_Circle_Self17.mp4'},
    {'name': 'Research/All noisy HS/G HS 90%/90_G_Neutral_Lateral_Forward7.mp4', 'path': 'Research/All noisy HS/G HS 90%/90_G_Neutral_Lateral_Forward7.mp4'},
    {'name': 'Research/All noisy HS/C HS 90%/90_C_Neutral_Circle_Down6.mp4', 'path': 'Research/All noisy HS/C HS 90%/90_C_Neutral_Circle_Down6.mp4'},
    {'name': 'Research/All noisy HS/R HS 90%/90_R_Mouth_Circle_Forward15.mp4', 'path': 'Research/All noisy HS/R HS 90%/90_R_Mouth_Circle_Forward15.mp4'},
    {'name': 'Research/All noisy HS/B HS 90%/90_B_Mouth_Circle_Self16.mp4', 'path': 'Research/All noisy HS/B HS 90%/90_B_Mouth_Circle_Self16.mp4'},
    {'name': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Mouth_Lateral_Forward17.mp4', 'path': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Mouth_Lateral_Forward17.mp4'},
    {'name': 'Research/All noisy HS/R HS 90%/90_R_Mouth_Circle_Self16.mp4', 'path': 'Research/All noisy HS/R HS 90%/90_R_Mouth_Circle_Self16.mp4'},
    {'name': 'Research/All noisy HS/E HS 90%/90_E_Elbow_Circle_Self23.mp4', 'path': 'Research/All noisy HS/E HS 90%/90_E_Elbow_Circle_Self23.mp4'},
    {'name': 'Research/All noisy HS/V HS 90%/90_V_Elbow_Twist_Down24.mp4', 'path': 'Research/All noisy HS/V HS 90%/90_V_Elbow_Twist_Down24.mp4'},
    {'name': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Neutral_Circle_Down6.mp4', 'path': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Neutral_Circle_Down6.mp4'},
    {'name': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Elbow_Twist_Forward19.mp4', 'path': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Elbow_Twist_Forward19.mp4'},
    {'name': 'Research/All noisy HS/O HS 90%/90_O_Elbow_Twist_Down23.mp4', 'path': 'Research/All noisy HS/O HS 90%/90_O_Elbow_Twist_Down23.mp4'},
    {'name': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Elbow_Lateral_Down27.mp4', 'path': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Elbow_Lateral_Down27.mp4'},
    {'name': 'Research/All noisy HS/1 HS 90%/90_1_Elbow_Twist_Forward19.mp4', 'path': 'Research/All noisy HS/1 HS 90%/90_1_Elbow_Twist_Forward19.mp4'},
    {'name': 'Research/All noisy HS/K HS 90%/90_K_Neutral_Lateral_Down11.mp4', 'path': 'Research/All noisy HS/K HS 90%/90_K_Neutral_Lateral_Down11.mp4'},
    {'name': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Elbow_Lateral_Down28.mp4', 'path': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Elbow_Lateral_Down28.mp4'},
    {'name': 'Research/All noisy HS/F HS 90%/90_F_Mouth_Twist_Forward11.mp4', 'path': 'Research/All noisy HS/F HS 90%/90_F_Mouth_Twist_Forward11.mp4'},
    {'name': 'Research/All noisy HS/S HS 90%/90_S_Mouth_Circle_Self14.mp4', 'path': 'Research/All noisy HS/S HS 90%/90_S_Mouth_Circle_Self14.mp4'},
    {'name': 'Research/All noisy HS/B HS 90%/90_B_Mouth_Lateral_Self19.mp4', 'path': 'Research/All noisy HS/B HS 90%/90_B_Mouth_Lateral_Self19.mp4'},
    {'name': 'Research/All noisy HS/10 HS 90%/90_10_Neutral_Lateral_Self9.mp4', 'path': 'Research/All noisy HS/10 HS 90%/90_10_Neutral_Lateral_Self9.mp4'},
    {'name': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Neutral_Circle_Forward4.mp4', 'path': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Neutral_Circle_Forward4.mp4'},
    {'name': 'Research/All noisy HS/5 HS 90%/90_5_Neutral_Lateral_Self8.mp4', 'path': 'Research/All noisy HS/5 HS 90%/90_5_Neutral_Lateral_Self8.mp4'},
    {'name': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Elbow_Lateral_Down24.mp4', 'path': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Elbow_Lateral_Down24.mp4'},
    {'name': 'Research/All noisy HS/V HS 90%/90_V_Mouth_Twist_Down15.mp4', 'path': 'Research/All noisy HS/V HS 90%/90_V_Mouth_Twist_Down15.mp4'},
    {'name': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Neutral_Twist_Self2.mp4', 'path': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Neutral_Twist_Self2.mp4'},
    {'name': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Neutral_Lateral_Forward9.mp4', 'path': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Neutral_Lateral_Forward9.mp4'},
    {'name': 'Research/All noisy HS/U HS 90%/90_U_Elbow_Lateral_Forward28.mp4', 'path': 'Research/All noisy HS/U HS 90%/90_U_Elbow_Lateral_Forward28.mp4'},
    {'name': 'Research/All noisy HS/3 HS 90%/90_3_Elbow_Circle_Self23.mp4', 'path': 'Research/All noisy HS/3 HS 90%/90_3_Elbow_Circle_Self23.mp4'},
    {'name': 'Research/All noisy HS/V HS 90%/90_V_Neutral_Lateral_Forward9.mp4', 'path': 'Research/All noisy HS/V HS 90%/90_V_Neutral_Lateral_Forward9.mp4'},
    {'name': 'Research/All noisy HS/F HS 90%/90_F_Elbow_Lateral_Forward26.mp4', 'path': 'Research/All noisy HS/F HS 90%/90_F_Elbow_Lateral_Forward26.mp4'},
    {'name': 'Research/All noisy HS/O HS 90%/90_O_Elbow_Lateral_Self28.mp4', 'path': 'Research/All noisy HS/O HS 90%/90_O_Elbow_Lateral_Self28.mp4'},
    {'name': 'Research/All noisy HS/E HS 90%/90_E_Elbow_Twist_Forward19.mp4', 'path': 'Research/All noisy HS/E HS 90%/90_E_Elbow_Twist_Forward19.mp4'},
    {'name': 'Research/All noisy HS/K HS 90%/90_K_Mouth_Circle_Down17.mp4', 'path': 'Research/All noisy HS/K HS 90%/90_K_Mouth_Circle_Down17.mp4'},
    {'name': 'Research/All noisy HS/4 HS 90%/90_4_Neutral_Lateral_Forward7.mp4', 'path': 'Research/All noisy HS/4 HS 90%/90_4_Neutral_Lateral_Forward7.mp4'},
    {'name': 'Research/All noisy HS/C HS 90%/90_C_Neutral_Lateral_Down9.mp4', 'path': 'Research/All noisy HS/C HS 90%/90_C_Neutral_Lateral_Down9.mp4'},
    {'name': 'Research/All noisy HS/D HS 90%/90_D_Neutral_Circle_Self5.mp4', 'path': 'Research/All noisy HS/D HS 90%/90_D_Neutral_Circle_Self5.mp4'},
    {'name': 'Research/All noisy HS/B HS 90%/90_B_Elbow_Circle_Down 3.mp4', 'path': 'Research/All noisy HS/B HS 90%/90_B_Elbow_Circle_Down 3.mp4'},
    {'name': 'Research/All noisy HS/F HS 90%/90_F_Mouth_Lateral_Forward17.mp4', 'path': 'Research/All noisy HS/F HS 90%/90_F_Mouth_Lateral_Forward17.mp4'},
    {'name': 'Research/All noisy HS/K HS 90%/90_K_Neutral_Lateral_Self10.mp4', 'path': 'Research/All noisy HS/K HS 90%/90_K_Neutral_Lateral_Self10.mp4'},
    {'name': 'Research/All noisy HS/10 HS 90%/90_10_Elbow_Twist_Forward21.mp4', 'path': 'Research/All noisy HS/10 HS 90%/90_10_Elbow_Twist_Forward21.mp4'},
    {'name': 'Research/All noisy HS/F HS 90%/90_F_Neutral_Twist_Down3.mp4', 'path': 'Research/All noisy HS/F HS 90%/90_F_Neutral_Twist_Down3.mp4'},
    {'name': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Mouth_Twist_Down13.mp4', 'path': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Mouth_Twist_Down13.mp4'},
    {'name': 'Research/All noisy HS/O HS 90%/90_O_Mouth_Twist_Forward12.mp4', 'path': 'Research/All noisy HS/O HS 90%/90_O_Mouth_Twist_Forward12.mp4'},
    {'name': 'Research/All noisy HS/8 HS 90%/90_8_Mouth_Lateral_Forward17.mp4', 'path': 'Research/All noisy HS/8 HS 90%/90_8_Mouth_Lateral_Forward17.mp4'},
    {'name': 'Research/All noisy HS/L HS 90%/90_L_Mouth_Lateral_Forward16.mp4', 'path': 'Research/All noisy HS/L HS 90%/90_L_Mouth_Lateral_Forward16.mp4'},
    {'name': 'Research/All noisy HS/V HS 90%/90_V_Neutral_Circle_Forward5.mp4', 'path': 'Research/All noisy HS/V HS 90%/90_V_Neutral_Circle_Forward5.mp4'},
    {'name': 'Research/All noisy HS/U HS 90%/90_U_Neutral_Twist_Down3.mp4', 'path': 'Research/All noisy HS/U HS 90%/90_U_Neutral_Twist_Down3.mp4'},
    {'name': 'Research/All noisy HS/V HS 90%/90_V_Mouth_Circle_Down18.mp4', 'path': 'Research/All noisy HS/V HS 90%/90_V_Mouth_Circle_Down18.mp4'},
    {'name': 'Research/All noisy HS/8 HS 90%/90_8_Mouth_Twist_Self12.mp4', 'path': 'Research/All noisy HS/8 HS 90%/90_8_Mouth_Twist_Self12.mp4'},
    {'name': 'Research/All noisy HS/K HS 90%/90_K_Mouth_Lateral_Down20.mp4', 'path': 'Research/All noisy HS/K HS 90%/90_K_Mouth_Lateral_Down20.mp4'},
    {'name': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Mouth_Lateral_Down3.mp4', 'path': 'Research/All noisy HS/Bent L HS 90%/90_Bent_L_Mouth_Lateral_Down3.mp4'},
    {'name': 'Research/All noisy HS/8 HS 90%/90_8_Elbow_Lateral_Forward26.mp4', 'path': 'Research/All noisy HS/8 HS 90%/90_8_Elbow_Lateral_Forward26.mp4'},
    {'name': 'Research/All noisy HS/1 HS 90%/90_1_Elbow_Twist_Self20.mp4', 'path': 'Research/All noisy HS/1 HS 90%/90_1_Elbow_Twist_Self20.mp4'},
    {'name': 'Research/All noisy HS/5 HS 90%/90_5_Mouth_Circle_Down15.mp4', 'path': 'Research/All noisy HS/5 HS 90%/90_5_Mouth_Circle_Down15.mp4'},
    {'name': 'Research/All noisy HS/L HS 90%/90_L_Neutral_Circle_Down6.mp4', 'path': 'Research/All noisy HS/L HS 90%/90_L_Neutral_Circle_Down6.mp4'},
    {'name': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Elbow_Circle_Forward23.mp4', 'path': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Elbow_Circle_Forward23.mp4'},
    {'name': 'Research/All noisy HS/D HS 90%/90_D_Mouth_Circle_Down15.mp4', 'path': 'Research/All noisy HS/D HS 90%/90_D_Mouth_Circle_Down15.mp4'},
    {'name': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Neutral_Twist_Self2.mp4', 'path': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Neutral_Twist_Self2.mp4'},
    {'name': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Neutral_Circle_Down6.mp4', 'path': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Neutral_Circle_Down6.mp4'},
    {'name': 'Research/All noisy HS/X HS 90%/90_X_Elbow_Circle_Forward22.mp4', 'path': 'Research/All noisy HS/X HS 90%/90_X_Elbow_Circle_Forward22.mp4'},
    {'name': 'Research/All noisy HS/3 HS 90%/90_3_Elbow_Lateral_Forward25.mp4', 'path': 'Research/All noisy HS/3 HS 90%/90_3_Elbow_Lateral_Forward25.mp4'},
    {'name': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Mouth_Circle_Down15.mp4', 'path': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Mouth_Circle_Down15.mp4'},
    {'name': 'Research/All noisy HS/O HS 90%/90_O_Neutral_Circle_Forward5.mp4', 'path': 'Research/All noisy HS/O HS 90%/90_O_Neutral_Circle_Forward5.mp4'},
    {'name': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Elbow_Circle_Self26.mp4', 'path': 'Research/All noisy HS/Radial 8 HS 90%/90_Radial_8_Elbow_Circle_Self26.mp4'},
    {'name': 'Research/All noisy HS/F HS 90%/90_F_Neutral_Lateral_Self9.mp4', 'path': 'Research/All noisy HS/F HS 90%/90_F_Neutral_Lateral_Self9.mp4'},
    {'name': 'Research/All noisy HS/10 HS 90%/90_10_Mouth_Lateral_Forward18.mp4', 'path': 'Research/All noisy HS/10 HS 90%/90_10_Mouth_Lateral_Forward18.mp4'},
    {'name': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Mouth_Lateral_Forward16.mp4', 'path': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Mouth_Lateral_Forward16.mp4'},
    {'name': 'Research/All noisy HS/E HS 90%/90_E_Neutral_Twist_Forward1.mp4', 'path': 'Research/All noisy HS/E HS 90%/90_E_Neutral_Twist_Forward1.mp4'},
    {'name': 'Research/All noisy HS/F HS 90%/90_F_Neutral_Lateral_Forward8.mp4', 'path': 'Research/All noisy HS/F HS 90%/90_F_Neutral_Lateral_Forward8.mp4'},
    {'name': 'Research/All noisy HS/O HS 90%/90_O_Neutral_Lateral_Down11.mp4', 'path': 'Research/All noisy HS/O HS 90%/90_O_Neutral_Lateral_Down11.mp4'},
    {'name': 'Research/All noisy HS/U HS 90%/90_U_Mouth_Lateral_Self18.mp4', 'path': 'Research/All noisy HS/U HS 90%/90_U_Mouth_Lateral_Self18.mp4'},
    {'name': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Mouth_Lateral_Down20.mp4', 'path': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Mouth_Lateral_Down20.mp4'},
    {'name': 'Research/All noisy HS/X HS 90%/90_X_Neutral_Twist_Forward1.mp4', 'path': 'Research/All noisy HS/X HS 90%/90_X_Neutral_Twist_Forward1.mp4'},
    {'name': 'Research/All noisy HS/B HS 90%/90_B_Elbow_Twist_Down23.mp4', 'path': 'Research/All noisy HS/B HS 90%/90_B_Elbow_Twist_Down23.mp4'},
    {'name': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Elbow_Circle_Self23.mp4', 'path': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Elbow_Circle_Self23.mp4'},
    {'name': 'Research/All noisy HS/B HS 90%/90_B_Neutral_Twist_Forward1.mp4', 'path': 'Research/All noisy HS/B HS 90%/90_B_Neutral_Twist_Forward1.mp4'},
    {'name': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Elbow_Lateral_Down27.mp4', 'path': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Elbow_Lateral_Down27.mp4'},
    {'name': 'Research/All noisy HS/L HS 90%/90_L_Neutral_Twist_Forward1.mp4', 'path': 'Research/All noisy HS/L HS 90%/90_L_Neutral_Twist_Forward1.mp4'},
    {'name': 'Research/All noisy HS/X HS 90%/90_X_Elbow_Twist_Forward19.mp4', 'path': 'Research/All noisy HS/X HS 90%/90_X_Elbow_Twist_Forward19.mp4'},
    {'name': 'Research/All noisy HS/O HS 90%/90_O_Neutral_Circle_Down8.mp4', 'path': 'Research/All noisy HS/O HS 90%/90_O_Neutral_Circle_Down8.mp4'},
    {'name': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Elbow_Circle_Down25.mp4', 'path': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Elbow_Circle_Down25.mp4'},
    {'name': 'Research/All noisy HS/i HS 90%/90_I_Neutral_Lateral_Forward8.mp4', 'path': 'Research/All noisy HS/i HS 90%/90_I_Neutral_Lateral_Forward8.mp4'},
    {'name': 'Research/All noisy HS/U HS 90%/90_U_Neutral_Twist_Self2.mp4', 'path': 'Research/All noisy HS/U HS 90%/90_U_Neutral_Twist_Self2.mp4'},
    {'name': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Elbow_Twist_Self20.mp4', 'path': 'Research/All noisy HS/Radial U HS 90%/90_Radial_U_Elbow_Twist_Self20.mp4'},
    {'name': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Elbow_Lateral_Forward26.mp4', 'path': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Elbow_Lateral_Forward26.mp4'},
    {'name': 'Research/All noisy HS/10 HS 90%/90_10_Elbow_Twist_Self22.mp4', 'path': 'Research/All noisy HS/10 HS 90%/90_10_Elbow_Twist_Self22.mp4'},
    {'name': 'Research/All noisy HS/S HS 90%/90_S_Mouth_Circle_Forward13.mp4', 'path': 'Research/All noisy HS/S HS 90%/90_S_Mouth_Circle_Forward13.mp4'},
    {'name': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Mouth_Twist_Forward11.mp4', 'path': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Mouth_Twist_Forward11.mp4'},
    {'name': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Neutral_Twist_Forward1.mp4', 'path': 'Research/All noisy HS/Touch X HS 90%/90_Touch_X_Neutral_Twist_Forward1.mp4'},
    {'name': 'Research/All noisy HS/S HS 90%/90_S_Neutral_Twist_Forward1.mp4', 'path': 'Research/All noisy HS/S HS 90%/90_S_Neutral_Twist_Forward1.mp4'},
    {'name': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Mouth_Twist_Down12.mp4', 'path': 'Research/All noisy HS/1 Ulnar HS 90%/90_1_Ulnar_Mouth_Twist_Down12.mp4'},
    {'name': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Neutral_Circle_Self6.mp4', 'path': 'Research/All noisy HS/Flat O HS 90%/90_Flat_O_Neutral_Circle_Self6.mp4'},
    {'name': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Neutral_Twist_Down3.mp4', 'path': 'Research/All noisy HS/Curved 5 HS 90%/90_Curved_5_Neutral_Twist_Down3.mp4'},
    {'name': 'Research/All noisy HS/4 HS 90%/90_4_Mouth_Twist_Down12.mp4', 'path': 'Research/All noisy HS/4 HS 90%/90_4_Mouth_Twist_Down12.mp4'},
    {'name': 'Research/All noisy HS/D HS 90%/90_D_Neutral_Twist_Self2.mp4', 'path': 'Research/All noisy HS/D HS 90%/90_D_Neutral_Twist_Self2.mp4'},
    {'name': 'Research/All noisy HS/S HS 90%/90_S_Elbow_Lateral_Forward26.mp4', 'path': 'Research/All noisy HS/S HS 90%/90_S_Elbow_Lateral_Forward26.mp4'},
    {'name': 'Research/All noisy HS/1 HS 90%/90_1_Neutral_Twist_Forward1.mp4', 'path': 'Research/All noisy HS/1 HS 90%/90_1_Neutral_Twist_Forward1.mp4'},
    {'name': 'Research/All noisy HS/A HS 90%/90_A_Neutral_Lateral_Self9.mp4', 'path': 'Research/All noisy HS/A HS 90%/90_A_Neutral_Lateral_Self9.mp4'},
    {'name': 'Research/All noisy HS/G HS 90%/90_G_Neutral_Circle_Forward4.mp4', 'path': 'Research/All noisy HS/G HS 90%/90_G_Neutral_Circle_Forward4.mp4'},
    {'name': 'Research/All noisy HS/D HS 90%/90_D_Elbow_Circle_Forward22.mp4', 'path': 'Research/All noisy HS/D HS 90%/90_D_Elbow_Circle_Forward22.mp4'},
    {'name': 'Research/All noisy HS/L HS 90%/90_L_Neutral_Lateral_Forward7.mp4', 'path': 'Research/All noisy HS/L HS 90%/90_L_Neutral_Lateral_Forward7.mp4'},
    {'name': 'Research/All noisy HS/4 HS 90%/90_4_Mouth_Lateral_Self17.mp4', 'path': 'Research/All noisy HS/4 HS 90%/90_4_Mouth_Lateral_Self17.mp4'},
    {'name': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Neutral_Circle_Down6.mp4', 'path': 'Research/All noisy HS/Curved 3 HS 90%/90_Curved_3_Neutral_Circle_Down6.mp4'},
    {'name': 'Research/All noisy HS/W HS 90%/90_W_Elbow_Twist_Down22.mp4', 'path': 'Research/All noisy HS/W HS 90%/90_W_Elbow_Twist_Down22.mp4'},
    {'name': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Mouth_Circle_Down17.mp4', 'path': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Mouth_Circle_Down17.mp4'},
    {'name': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Elbow_Twist_Self22.mp4', 'path': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Elbow_Twist_Self22.mp4'},
    {'name': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Neutral_Twist_Down3.mp4', 'path': 'Research/All noisy HS/Adducted 5 HS 90%/90_Adducted_5_Neutral_Twist_Down3.mp4'},
    {'name': 'Research/All noisy HS/B HS 90%/90_B_Neutral_Twist_Down3.mp4', 'path': 'Research/All noisy HS/B HS 90%/90_B_Neutral_Twist_Down3.mp4'},
    {'name': 'Research/All noisy HS/8 HS 90%/90_8_Elbow_Circle_Self24.mp4', 'path': 'Research/All noisy HS/8 HS 90%/90_8_Elbow_Circle_Self24.mp4'},
    {'name': 'Research/All noisy HS/E HS 90%/90_E_Mouth_Circle_Self14.mp4', 'path': 'Research/All noisy HS/E HS 90%/90_E_Mouth_Circle_Self14.mp4'},
    {'name': 'Research/All noisy HS/G HS 90%/90_G_Elbow_Twist_Self21.mp4', 'path': 'Research/All noisy HS/G HS 90%/90_G_Elbow_Twist_Self21.mp4'},
    {'name': 'Research/All noisy HS/G HS 90%/90_G_Neutral_Twist_Forward1.mp4', 'path': 'Research/All noisy HS/G HS 90%/90_G_Neutral_Twist_Forward1.mp4'},
    {'name': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Mouth_Circle_Forward13.mp4', 'path': 'Research/All noisy HS/L Ulnar HS 90%/90_L_Ulnar_Mouth_Circle_Forward13.mp4'},
    {'name': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Neutral_Circle_Forward4.mp4', 'path': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Neutral_Circle_Forward4.mp4'},
    {'name': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Elbow_Twist_Down23.mp4', 'path': 'Research/All noisy HS/Adducted Bent 5 HS 90%/90_Adducted_Bent_5_Elbow_Twist_Down23.mp4'},
    {'name': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Elbow_Lateral_Self28.mp4', 'path': 'Research/All noisy HS/Curved V HS 90%/90_Curved_V_Elbow_Lateral_Self28.mp4'},
    {'name': 'default.png', 'path': 'https://pavlovia.org/assets/default/default.png'},
    {'name': 'Research/Right HS Images/1_ulnar.jpg', 'path': 'Research/Right HS Images/1_ulnar.jpg'},
    {'name': 'Research/Right HS Images/1.jpg', 'path': 'Research/Right HS Images/1.jpg'},
    {'name': 'Research/Right HS Images/3.jpg', 'path': 'Research/Right HS Images/3.jpg'},
    {'name': 'Research/Right HS Images/4.jpg', 'path': 'Research/Right HS Images/4.jpg'},
    {'name': 'Research/Right HS Images/5.jpg', 'path': 'Research/Right HS Images/5.jpg'},
    {'name': 'Research/Right HS Images/8.jpg', 'path': 'Research/Right HS Images/8.jpg'},
    {'name': 'Research/Right HS Images/10.jpg', 'path': 'Research/Right HS Images/10.jpg'},
    {'name': 'Research/Right HS Images/A.jpg', 'path': 'Research/Right HS Images/A.jpg'},
    {'name': 'Research/Right HS Images/H_U_radial.jpg', 'path': 'Research/Right HS Images/H_U_radial.jpg'},
    {'name': 'Research/Right HS Images/Adducted_5.jpg', 'path': 'Research/Right HS Images/Adducted_5.jpg'},
    {'name': 'Research/Right HS Images/Adducted_5_bent.jpg', 'path': 'Research/Right HS Images/Adducted_5_bent.jpg'},
    {'name': 'Research/Right HS Images/B.jpg', 'path': 'Research/Right HS Images/B.jpg'},
    {'name': 'Research/Right HS Images/3_curved.jpg', 'path': 'Research/Right HS Images/3_curved.jpg'},
    {'name': 'Research/Right HS Images/L_curved.jpg', 'path': 'Research/Right HS Images/L_curved.jpg'},
    {'name': 'Research/Right HS Images/V_curved.jpg', 'path': 'Research/Right HS Images/V_curved.jpg'},
    {'name': 'Research/Right HS Images/X_touch.jpg', 'path': 'Research/Right HS Images/X_touch.jpg'},
    {'name': 'Research/Right HS Images/C.jpg', 'path': 'Research/Right HS Images/C.jpg'},
    {'name': 'Research/Right HS Images/5_curved.jpg', 'path': 'Research/Right HS Images/5_curved.jpg'},
    {'name': 'Research/Right HS Images/D.jpg', 'path': 'Research/Right HS Images/D.jpg'},
    {'name': 'Research/Right HS Images/E.jpg', 'path': 'Research/Right HS Images/E.jpg'},
    {'name': 'Research/Right HS Images/F.jpg', 'path': 'Research/Right HS Images/F.jpg'},
    {'name': 'Research/Right HS Images/Flat_O.jpg', 'path': 'Research/Right HS Images/Flat_O.jpg'},
    {'name': 'Research/Right HS Images/G.jpg', 'path': 'Research/Right HS Images/G.jpg'},
    {'name': 'Research/Right HS Images/i.jpg', 'path': 'Research/Right HS Images/i.jpg'},
    {'name': 'Research/Right HS Images/K.jpg', 'path': 'Research/Right HS Images/K.jpg'},
    {'name': 'Research/Right HS Images/L_ulnar.jpg', 'path': 'Research/Right HS Images/L_ulnar.jpg'},
    {'name': 'Research/Right HS Images/L.jpg', 'path': 'Research/Right HS Images/L.jpg'},
    {'name': 'Research/Right HS Images/O.jpg', 'path': 'Research/Right HS Images/O.jpg'},
    {'name': 'Research/Right HS Images/8_radial.jpg', 'path': 'Research/Right HS Images/8_radial.jpg'},
    {'name': 'Research/Right HS Images/R.jpg', 'path': 'Research/Right HS Images/R.jpg'},
    {'name': 'Research/Right HS Images/S.jpg', 'path': 'Research/Right HS Images/S.jpg'},
    {'name': 'Research/Right HS Images/H_U.jpg', 'path': 'Research/Right HS Images/H_U.jpg'},
    {'name': 'Research/Right HS Images/V.jpg', 'path': 'Research/Right HS Images/V.jpg'},
    {'name': 'Research/Right HS Images/W.jpg', 'path': 'Research/Right HS Images/W.jpg'},
    {'name': 'Research/Right HS Images/X.jpg', 'path': 'Research/Right HS Images/X.jpg'},
    {'name': 'Research/Right HS Images/Y.jpg', 'path': 'Research/Right HS Images/Y.jpg'},
    {'name': 'Research/My Movie.mp4', 'path': 'Research/My Movie.mp4'},
    {'name': 'Research/Noisy_Black_Screen_90.mp4', 'path': 'Research/Noisy_Black_Screen_90.mp4'},
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.INFO);


var currentLoop;
var frameDur;
async function updateInfo() {
  currentLoop = psychoJS.experiment;  // right now there are no loops
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2024.2.4';
  expInfo['OS'] = window.navigator.platform;


  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  

  
  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);
  psychoJS.experiment.field_separator = '\t';


  return Scheduler.Event.NEXT;
}


var StartClock;
var Welcome;
var Text;
var PracticeClock;
var Practice_image;
var One_ulnar;
var One;
var three;
var four;
var five;
var eight;
var ten;
var a;
var add_3;
var add_5;
var add_bent_5;
var b;
var bent_3;
var bent_l;
var bent_v;
var touch_x;
var c;
var curved_5;
var d;
var e;
var f;
var flat_o;
var g;
var i;
var k;
var l_ulnar;
var l;
var o;
var open_8;
var r;
var s;
var u_h;
var v;
var w;
var x;
var y;
var mouse_2;
var TrialsClock;
var Black_ScreenClock;
var Black_Screen;
var Noisy_1Clock;
var Noisy_1;
var HS_vidsClock;
var HS_vids;
var Noisy_2Clock;
var Noisy_2;
var one_ulnar;
var one;
var Three;
var Four;
var Five;
var Eight;
var Ten;
var A;
var ADD_3;
var ADD_5;
var ADD_5_BENT;
var B;
var BENT_3;
var BENT_L;
var BENT_V;
var Touch_x;
var C;
var Curved_5;
var D;
var E;
var F;
var Flat_O;
var G;
var I;
var K;
var L_ulnar;
var L;
var O;
var Open_8;
var R;
var S;
var U_H;
var V;
var W;
var X;
var Y;
var mouse;
var BreakClock;
var BlankClock;
var Blank;
var Continue;
var GO;
var Break_2Clock;
var Blank_2Clock;
var Blank_2;
var Continue_2;
var GO_2;
var GoodbyeClock;
var ExitText;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Start"
  StartClock = new util.Clock();
  Welcome = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Text',
    text: 'Press Space to Begin ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Practice"
  PracticeClock = new util.Clock();
  Practice_image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Practice_image', units : undefined, 
    image : 'default.png', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0, 0], 
    draggable: false,
    size : [1.0, 1.0],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  One_ulnar = new visual.ImageStim({
    win : psychoJS.window,
    name : 'One_ulnar', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/1_ulnar.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.08), (- 0.08)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  One = new visual.ImageStim({
    win : psychoJS.window,
    name : 'One', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.08), 0.07], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  three = new visual.ImageStim({
    win : psychoJS.window,
    name : 'three', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/3.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.23), (- 0.23)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -3.0 
  });
  four = new visual.ImageStim({
    win : psychoJS.window,
    name : 'four', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/4.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.23), (- 0.38)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  five = new visual.ImageStim({
    win : psychoJS.window,
    name : 'five', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/5.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.08), 0.22], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  eight = new visual.ImageStim({
    win : psychoJS.window,
    name : 'eight', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/8.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.07, (- 0.08)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  ten = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ten', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/10.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.23), (- 0.08)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  a = new visual.ImageStim({
    win : psychoJS.window,
    name : 'a', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/A.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.22, (- 0.08)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  add_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'add_3', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/H_U_radial.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.38), (- 0.08)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  add_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'add_5', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/Adducted_5.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.23), 0.37], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  add_bent_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'add_bent_5', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/Adducted_5_bent.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.07, 0.07], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -11.0 
  });
  b = new visual.ImageStim({
    win : psychoJS.window,
    name : 'b', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/B.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.23), 0.07], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -12.0 
  });
  bent_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bent_3', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/3_curved.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.23), 0.22], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -13.0 
  });
  bent_l = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bent_l', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/L_curved.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.07, 0.22], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -14.0 
  });
  bent_v = new visual.ImageStim({
    win : psychoJS.window,
    name : 'bent_v', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/V_curved.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.08), (- 0.23)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -15.0 
  });
  touch_x = new visual.ImageStim({
    win : psychoJS.window,
    name : 'touch_x', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/X_touch.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.38), (- 0.23)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -16.0 
  });
  c = new visual.ImageStim({
    win : psychoJS.window,
    name : 'c', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/C.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.38), (- 0.38)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -17.0 
  });
  curved_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'curved_5', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/5_curved.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.22, 0.22], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -18.0 
  });
  d = new visual.ImageStim({
    win : psychoJS.window,
    name : 'd', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/D.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.07, (- 0.23)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -19.0 
  });
  e = new visual.ImageStim({
    win : psychoJS.window,
    name : 'e', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/E.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.37, 0.22], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -20.0 
  });
  f = new visual.ImageStim({
    win : psychoJS.window,
    name : 'f', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/F.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.07, 0.37], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -21.0 
  });
  flat_o = new visual.ImageStim({
    win : psychoJS.window,
    name : 'flat_o', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/Flat_O.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.38), 0.07], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -22.0 
  });
  g = new visual.ImageStim({
    win : psychoJS.window,
    name : 'g', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/G.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.08), 0.37], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -23.0 
  });
  i = new visual.ImageStim({
    win : psychoJS.window,
    name : 'i', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/i.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.38), 0.22], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -24.0 
  });
  k = new visual.ImageStim({
    win : psychoJS.window,
    name : 'k', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/K.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.22, 0.07], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -25.0 
  });
  l_ulnar = new visual.ImageStim({
    win : psychoJS.window,
    name : 'l_ulnar', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/L_ulnar.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.37, 0.07], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -26.0 
  });
  l = new visual.ImageStim({
    win : psychoJS.window,
    name : 'l', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/L.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.38), 0.37], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -27.0 
  });
  o = new visual.ImageStim({
    win : psychoJS.window,
    name : 'o', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/O.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.22, (- 0.23)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -28.0 
  });
  open_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'open_8', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/8_radial.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.22, 0.37], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -29.0 
  });
  r = new visual.ImageStim({
    win : psychoJS.window,
    name : 'r', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/R.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.08), (- 0.38)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -30.0 
  });
  s = new visual.ImageStim({
    win : psychoJS.window,
    name : 's', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/S.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.07, (- 0.38)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -31.0 
  });
  u_h = new visual.ImageStim({
    win : psychoJS.window,
    name : 'u_h', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/H_U.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.37, (- 0.23)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -32.0 
  });
  v = new visual.ImageStim({
    win : psychoJS.window,
    name : 'v', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/V.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.37, (- 0.38)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -33.0 
  });
  w = new visual.ImageStim({
    win : psychoJS.window,
    name : 'w', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/W.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.37, (- 0.08)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -34.0 
  });
  x = new visual.ImageStim({
    win : psychoJS.window,
    name : 'x', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/X.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.37, 0.37], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -35.0 
  });
  y = new visual.ImageStim({
    win : psychoJS.window,
    name : 'y', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/Y.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.22, (- 0.38)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -36.0 
  });
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  // Initialize components for Routine "Trials"
  TrialsClock = new util.Clock();
  Black_ScreenClock = new util.Clock();
  Black_Screen = new visual.MovieStim({
    win: psychoJS.window,
    name: 'Black_Screen',
    units: psychoJS.window.units,
    movie: '/Users/chasehubbs/Desktop/Research/My Movie.mp4',
    pos: [0, 0],
    anchor: 'center',
    size: [2.0, 2.0],
    ori: 0.0,
    opacity: undefined,
    loop: false,
    noAudio: false,
    depth: 0
    });
  Noisy_1Clock = new util.Clock();
  Noisy_1 = new visual.MovieStim({
    win: psychoJS.window,
    name: 'Noisy_1',
    units: psychoJS.window.units,
    movie: '/Users/chasehubbs/Desktop/Research/Noisy_Black_Screen_90.mp4',
    pos: [0, 0],
    anchor: 'center',
    size: [2.0, 2.0],
    ori: 0.0,
    opacity: undefined,
    loop: false,
    noAudio: false,
    depth: -1
    });
  HS_vidsClock = new util.Clock();
  HS_vids = new visual.MovieStim({
    win: psychoJS.window,
    name: 'HS_vids',
    units: psychoJS.window.units,
    movie: undefined,
    pos: [0, 0],
    anchor: 'center',
    size: [1.0, 1.0],
    ori: 0.0,
    opacity: undefined,
    loop: false,
    noAudio: false,
    depth: -2
    });
  Noisy_2Clock = new util.Clock();
  Noisy_2 = new visual.MovieStim({
    win: psychoJS.window,
    name: 'Noisy_2',
    units: psychoJS.window.units,
    movie: '/Users/chasehubbs/Desktop/Research/Noisy_Black_Screen_90.mp4',
    pos: [0, 0],
    anchor: 'center',
    size: [2.0, 2.0],
    ori: 0.0,
    opacity: undefined,
    loop: false,
    noAudio: false,
    depth: -3
    });
  one_ulnar = new visual.ImageStim({
    win : psychoJS.window,
    name : 'one_ulnar', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/1_ulnar.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.08), (- 0.08)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  one = new visual.ImageStim({
    win : psychoJS.window,
    name : 'one', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/1.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.08), 0.07], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -5.0 
  });
  Three = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Three', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/3.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.23), (- 0.23)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -6.0 
  });
  Four = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Four', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/4.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.23), (- 0.38)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -7.0 
  });
  Five = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Five', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/5.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.08), 0.22], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -8.0 
  });
  Eight = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Eight', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/8.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.07, (- 0.08)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -9.0 
  });
  Ten = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Ten', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/10.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.23), (- 0.08)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -10.0 
  });
  A = new visual.ImageStim({
    win : psychoJS.window,
    name : 'A', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/A.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.22, (- 0.08)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -11.0 
  });
  ADD_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ADD_3', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/H_U_radial.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.38), (- 0.08)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -12.0 
  });
  ADD_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ADD_5', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/Adducted_5.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.23), 0.37], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -13.0 
  });
  ADD_5_BENT = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ADD_5_BENT', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/Adducted_5_bent.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.07, 0.07], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -14.0 
  });
  B = new visual.ImageStim({
    win : psychoJS.window,
    name : 'B', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/B.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.23), 0.07], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -15.0 
  });
  BENT_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'BENT_3', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/3_curved.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.23), 0.22], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -16.0 
  });
  BENT_L = new visual.ImageStim({
    win : psychoJS.window,
    name : 'BENT_L', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/L_curved.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.07, 0.22], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -17.0 
  });
  BENT_V = new visual.ImageStim({
    win : psychoJS.window,
    name : 'BENT_V', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/V_curved.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.08), (- 0.23)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -18.0 
  });
  Touch_x = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Touch_x', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/X_touch.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.38), (- 0.23)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -19.0 
  });
  C = new visual.ImageStim({
    win : psychoJS.window,
    name : 'C', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/C.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.38), (- 0.38)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -20.0 
  });
  Curved_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Curved_5', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/5_curved.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.22, 0.22], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -21.0 
  });
  D = new visual.ImageStim({
    win : psychoJS.window,
    name : 'D', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/D.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.07, (- 0.23)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -22.0 
  });
  E = new visual.ImageStim({
    win : psychoJS.window,
    name : 'E', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/E.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.37, 0.22], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -23.0 
  });
  F = new visual.ImageStim({
    win : psychoJS.window,
    name : 'F', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/F.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.07, 0.37], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -24.0 
  });
  Flat_O = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Flat_O', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/Flat_O.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.38), 0.07], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -25.0 
  });
  G = new visual.ImageStim({
    win : psychoJS.window,
    name : 'G', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/G.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.08), 0.37], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -26.0 
  });
  I = new visual.ImageStim({
    win : psychoJS.window,
    name : 'I', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/i.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.38), 0.22], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -27.0 
  });
  K = new visual.ImageStim({
    win : psychoJS.window,
    name : 'K', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/K.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.22, 0.07], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -28.0 
  });
  L_ulnar = new visual.ImageStim({
    win : psychoJS.window,
    name : 'L_ulnar', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/L_ulnar.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.37, 0.07], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -29.0 
  });
  L = new visual.ImageStim({
    win : psychoJS.window,
    name : 'L', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/L.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.38), 0.37], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -30.0 
  });
  O = new visual.ImageStim({
    win : psychoJS.window,
    name : 'O', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/O.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.22, (- 0.23)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -31.0 
  });
  Open_8 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Open_8', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/8_radial.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.22, 0.37], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -32.0 
  });
  R = new visual.ImageStim({
    win : psychoJS.window,
    name : 'R', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/R.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [(- 0.08), (- 0.38)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -33.0 
  });
  S = new visual.ImageStim({
    win : psychoJS.window,
    name : 'S', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/S.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.07, (- 0.38)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -34.0 
  });
  U_H = new visual.ImageStim({
    win : psychoJS.window,
    name : 'U_H', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/H_U.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.37, (- 0.23)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -35.0 
  });
  V = new visual.ImageStim({
    win : psychoJS.window,
    name : 'V', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/V.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.37, (- 0.38)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -36.0 
  });
  W = new visual.ImageStim({
    win : psychoJS.window,
    name : 'W', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/W.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.37, (- 0.08)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -37.0 
  });
  X = new visual.ImageStim({
    win : psychoJS.window,
    name : 'X', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/X.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.37, 0.37], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -38.0 
  });
  Y = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Y', units : undefined, 
    image : '/Users/chasehubbs/Desktop/Research/Right HS Images/Y.jpg', mask : undefined,
    anchor : 'center',
    ori : 0.0, 
    pos : [0.22, (- 0.38)], 
    draggable: false,
    size : [0.15, 0.15],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -39.0 
  });
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  // Initialize components for Routine "Break"
  BreakClock = new util.Clock();
  BlankClock = new util.Clock();
  Blank = new visual.MovieStim({
    win: psychoJS.window,
    name: 'Blank',
    units: psychoJS.window.units,
    movie: '/Users/chasehubbs/Desktop/Research/My Movie.mp4',
    pos: [0, 0],
    anchor: 'center',
    size: [0.5, 0.5],
    ori: 0.0,
    opacity: undefined,
    loop: false,
    noAudio: false,
    depth: 0
    });
  Continue = new visual.TextStim({
    win: psychoJS.window,
    name: 'Continue',
    text: 'Press space to continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  GO = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Break_2"
  Break_2Clock = new util.Clock();
  Blank_2Clock = new util.Clock();
  Blank_2 = new visual.MovieStim({
    win: psychoJS.window,
    name: 'Blank_2',
    units: psychoJS.window.units,
    movie: '/Users/chasehubbs/Desktop/Research/My Movie.mp4',
    pos: [0, 0],
    anchor: 'center',
    size: [0.5, 0.5],
    ori: 0.0,
    opacity: undefined,
    loop: false,
    noAudio: false,
    depth: 0
    });
  Continue_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Continue_2',
    text: 'Press space to continue',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: -1.0 
  });
  
  GO_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Goodbye"
  GoodbyeClock = new util.Clock();
  ExitText = new visual.TextStim({
    win: psychoJS.window,
    name: 'ExitText',
    text: 'Thank you for participating, please wait while we save your results... ',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], draggable: false, height: 0.05,  wrapWidth: undefined, ori: 0.0,
    languageStyle: 'LTR',
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var StartMaxDurationReached;
var _Welcome_allKeys;
var StartMaxDuration;
var StartComponents;
function StartRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Start' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    StartClock.reset();
    routineTimer.reset();
    StartMaxDurationReached = false;
    // update component parameters for each repeat
    Welcome.keys = undefined;
    Welcome.rt = undefined;
    _Welcome_allKeys = [];
    psychoJS.experiment.addData('Start.started', globalClock.getTime());
    StartMaxDuration = null
    // keep track of which components have finished
    StartComponents = [];
    StartComponents.push(Welcome);
    StartComponents.push(Text);
    
    StartComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function StartRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Start' ---
    // get current time
    t = StartClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Welcome* updates
    if (t >= 0.0 && Welcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Welcome.tStart = t;  // (not accounting for frame time here)
      Welcome.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { Welcome.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { Welcome.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { Welcome.clearEvents(); });
    }
    
    if (Welcome.status === PsychoJS.Status.STARTED) {
      let theseKeys = Welcome.getKeys({keyList: ['space'], waitRelease: false});
      _Welcome_allKeys = _Welcome_allKeys.concat(theseKeys);
      if (_Welcome_allKeys.length > 0) {
        Welcome.keys = _Welcome_allKeys[_Welcome_allKeys.length - 1].name;  // just the last key pressed
        Welcome.rt = _Welcome_allKeys[_Welcome_allKeys.length - 1].rt;
        Welcome.duration = _Welcome_allKeys[_Welcome_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *Text* updates
    if (t >= 0.0 && Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Text.tStart = t;  // (not accounting for frame time here)
      Text.frameNStart = frameN;  // exact frame index
      
      Text.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    StartComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function StartRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Start' ---
    StartComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Start.stopped', globalClock.getTime());
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(Welcome.corr, level);
    }
    psychoJS.experiment.addData('Welcome.keys', Welcome.keys);
    if (typeof Welcome.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('Welcome.rt', Welcome.rt);
        psychoJS.experiment.addData('Welcome.duration', Welcome.duration);
        routineTimer.reset();
        }
    
    Welcome.stop();
    // the Routine "Start" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Training;
function TrainingLoopBegin(TrainingLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Training = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'Research/Excel books/Training Book.xlsx',
      seed: undefined, name: 'Training'
    });
    psychoJS.experiment.addLoop(Training); // add the loop to the experiment
    currentLoop = Training;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    Training.forEach(function() {
      snapshot = Training.getSnapshot();
    
      TrainingLoopScheduler.add(importConditions(snapshot));
      TrainingLoopScheduler.add(PracticeRoutineBegin(snapshot));
      TrainingLoopScheduler.add(PracticeRoutineEachFrame());
      TrainingLoopScheduler.add(PracticeRoutineEnd(snapshot));
      TrainingLoopScheduler.add(TrainingLoopEndIteration(TrainingLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function TrainingLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(Training);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function TrainingLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: '/Users/chasehubbs/Desktop/Research/Excel books/Part_1.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(TrialsRoutineBegin(snapshot));
      trialsLoopScheduler.add(TrialsRoutineEachFrame());
      trialsLoopScheduler.add(TrialsRoutineEnd(snapshot));
      trialsLoopScheduler.add(trialsLoopEndIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trialsLoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_2;
function trials_2LoopBegin(trials_2LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_2 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: '/Users/chasehubbs/Desktop/Research/Excel books/Part 2.xlsx',
      seed: undefined, name: 'trials_2'
    });
    psychoJS.experiment.addLoop(trials_2); // add the loop to the experiment
    currentLoop = trials_2;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_2.forEach(function() {
      snapshot = trials_2.getSnapshot();
    
      trials_2LoopScheduler.add(importConditions(snapshot));
      trials_2LoopScheduler.add(TrialsRoutineBegin(snapshot));
      trials_2LoopScheduler.add(TrialsRoutineEachFrame());
      trials_2LoopScheduler.add(TrialsRoutineEnd(snapshot));
      trials_2LoopScheduler.add(trials_2LoopEndIteration(trials_2LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_2LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_2);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_2LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_3;
function trials_3LoopBegin(trials_3LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_3 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: '/Users/chasehubbs/Desktop/Research/Excel books/Part 3.xlsx',
      seed: undefined, name: 'trials_3'
    });
    psychoJS.experiment.addLoop(trials_3); // add the loop to the experiment
    currentLoop = trials_3;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_3.forEach(function() {
      snapshot = trials_3.getSnapshot();
    
      trials_3LoopScheduler.add(importConditions(snapshot));
      trials_3LoopScheduler.add(TrialsRoutineBegin(snapshot));
      trials_3LoopScheduler.add(TrialsRoutineEachFrame());
      trials_3LoopScheduler.add(TrialsRoutineEnd(snapshot));
      trials_3LoopScheduler.add(trials_3LoopEndIteration(trials_3LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_3LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_3);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_3LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var trials_4;
function trials_4LoopBegin(trials_4LoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials_4 = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: '/Users/chasehubbs/Desktop/Research/Excel books/Part 4 .xlsx',
      seed: undefined, name: 'trials_4'
    });
    psychoJS.experiment.addLoop(trials_4); // add the loop to the experiment
    currentLoop = trials_4;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials_4.forEach(function() {
      snapshot = trials_4.getSnapshot();
    
      trials_4LoopScheduler.add(importConditions(snapshot));
      trials_4LoopScheduler.add(TrialsRoutineBegin(snapshot));
      trials_4LoopScheduler.add(TrialsRoutineEachFrame());
      trials_4LoopScheduler.add(TrialsRoutineEnd(snapshot));
      trials_4LoopScheduler.add(trials_4LoopEndIteration(trials_4LoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trials_4LoopEnd() {
  // terminate loop
  psychoJS.experiment.removeLoop(trials_4);
  // update the current loop from the ExperimentHandler
  if (psychoJS.experiment._unfinishedLoops.length>0)
    currentLoop = psychoJS.experiment._unfinishedLoops.at(-1);
  else
    currentLoop = psychoJS.experiment;  // so we use addData from the experiment
  return Scheduler.Event.NEXT;
}


function trials_4LoopEndIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        psychoJS.experiment.nextEntry(snapshot);
      }
    return Scheduler.Event.NEXT;
    }
  };
}


var PracticeMaxDurationReached;
var gotValidClick;
var PracticeMaxDuration;
var PracticeComponents;
function PracticeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Practice' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    PracticeClock.reset();
    routineTimer.reset();
    PracticeMaxDurationReached = false;
    // update component parameters for each repeat
    Practice_image.setImage(Training_Pics);
    // setup some python lists for storing info about the mouse_2
    // current position of the mouse:
    mouse_2.x = [];
    mouse_2.y = [];
    mouse_2.leftButton = [];
    mouse_2.midButton = [];
    mouse_2.rightButton = [];
    mouse_2.time = [];
    mouse_2.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('Practice.started', globalClock.getTime());
    PracticeMaxDuration = null
    // keep track of which components have finished
    PracticeComponents = [];
    PracticeComponents.push(Practice_image);
    PracticeComponents.push(One_ulnar);
    PracticeComponents.push(One);
    PracticeComponents.push(three);
    PracticeComponents.push(four);
    PracticeComponents.push(five);
    PracticeComponents.push(eight);
    PracticeComponents.push(ten);
    PracticeComponents.push(a);
    PracticeComponents.push(add_3);
    PracticeComponents.push(add_5);
    PracticeComponents.push(add_bent_5);
    PracticeComponents.push(b);
    PracticeComponents.push(bent_3);
    PracticeComponents.push(bent_l);
    PracticeComponents.push(bent_v);
    PracticeComponents.push(touch_x);
    PracticeComponents.push(c);
    PracticeComponents.push(curved_5);
    PracticeComponents.push(d);
    PracticeComponents.push(e);
    PracticeComponents.push(f);
    PracticeComponents.push(flat_o);
    PracticeComponents.push(g);
    PracticeComponents.push(i);
    PracticeComponents.push(k);
    PracticeComponents.push(l_ulnar);
    PracticeComponents.push(l);
    PracticeComponents.push(o);
    PracticeComponents.push(open_8);
    PracticeComponents.push(r);
    PracticeComponents.push(s);
    PracticeComponents.push(u_h);
    PracticeComponents.push(v);
    PracticeComponents.push(w);
    PracticeComponents.push(x);
    PracticeComponents.push(y);
    PracticeComponents.push(mouse_2);
    
    PracticeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
var prevButtonState;
var _mouseButtons;
var _mouseXYs;
function PracticeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Practice' ---
    // get current time
    t = PracticeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Practice_image* updates
    if (t >= 0.0 && Practice_image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Practice_image.tStart = t;  // (not accounting for frame time here)
      Practice_image.frameNStart = frameN;  // exact frame index
      
      Practice_image.setAutoDraw(true);
    }
    
    frameRemains = 0.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Practice_image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Practice_image.setAutoDraw(false);
    }
    
    
    // *One_ulnar* updates
    if (t >= 1.0 && One_ulnar.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      One_ulnar.tStart = t;  // (not accounting for frame time here)
      One_ulnar.frameNStart = frameN;  // exact frame index
      
      One_ulnar.setAutoDraw(true);
    }
    
    
    // *One* updates
    if (t >= 1 && One.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      One.tStart = t;  // (not accounting for frame time here)
      One.frameNStart = frameN;  // exact frame index
      
      One.setAutoDraw(true);
    }
    
    
    // *three* updates
    if (t >= 1 && three.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      three.tStart = t;  // (not accounting for frame time here)
      three.frameNStart = frameN;  // exact frame index
      
      three.setAutoDraw(true);
    }
    
    
    // *four* updates
    if (t >= 1 && four.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      four.tStart = t;  // (not accounting for frame time here)
      four.frameNStart = frameN;  // exact frame index
      
      four.setAutoDraw(true);
    }
    
    
    // *five* updates
    if (t >= 1 && five.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      five.tStart = t;  // (not accounting for frame time here)
      five.frameNStart = frameN;  // exact frame index
      
      five.setAutoDraw(true);
    }
    
    
    // *eight* updates
    if (t >= 1 && eight.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      eight.tStart = t;  // (not accounting for frame time here)
      eight.frameNStart = frameN;  // exact frame index
      
      eight.setAutoDraw(true);
    }
    
    
    // *ten* updates
    if (t >= 1 && ten.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ten.tStart = t;  // (not accounting for frame time here)
      ten.frameNStart = frameN;  // exact frame index
      
      ten.setAutoDraw(true);
    }
    
    
    // *a* updates
    if (t >= 1 && a.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      a.tStart = t;  // (not accounting for frame time here)
      a.frameNStart = frameN;  // exact frame index
      
      a.setAutoDraw(true);
    }
    
    
    // *add_3* updates
    if (t >= 1 && add_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      add_3.tStart = t;  // (not accounting for frame time here)
      add_3.frameNStart = frameN;  // exact frame index
      
      add_3.setAutoDraw(true);
    }
    
    
    // *add_5* updates
    if (t >= 1 && add_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      add_5.tStart = t;  // (not accounting for frame time here)
      add_5.frameNStart = frameN;  // exact frame index
      
      add_5.setAutoDraw(true);
    }
    
    
    // *add_bent_5* updates
    if (t >= 1 && add_bent_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      add_bent_5.tStart = t;  // (not accounting for frame time here)
      add_bent_5.frameNStart = frameN;  // exact frame index
      
      add_bent_5.setAutoDraw(true);
    }
    
    
    // *b* updates
    if (t >= 1 && b.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      b.tStart = t;  // (not accounting for frame time here)
      b.frameNStart = frameN;  // exact frame index
      
      b.setAutoDraw(true);
    }
    
    
    // *bent_3* updates
    if (t >= 1 && bent_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bent_3.tStart = t;  // (not accounting for frame time here)
      bent_3.frameNStart = frameN;  // exact frame index
      
      bent_3.setAutoDraw(true);
    }
    
    
    // *bent_l* updates
    if (t >= 1 && bent_l.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bent_l.tStart = t;  // (not accounting for frame time here)
      bent_l.frameNStart = frameN;  // exact frame index
      
      bent_l.setAutoDraw(true);
    }
    
    
    // *bent_v* updates
    if (t >= 1 && bent_v.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      bent_v.tStart = t;  // (not accounting for frame time here)
      bent_v.frameNStart = frameN;  // exact frame index
      
      bent_v.setAutoDraw(true);
    }
    
    
    // *touch_x* updates
    if (t >= 1 && touch_x.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      touch_x.tStart = t;  // (not accounting for frame time here)
      touch_x.frameNStart = frameN;  // exact frame index
      
      touch_x.setAutoDraw(true);
    }
    
    
    // *c* updates
    if (t >= 1 && c.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      c.tStart = t;  // (not accounting for frame time here)
      c.frameNStart = frameN;  // exact frame index
      
      c.setAutoDraw(true);
    }
    
    
    // *curved_5* updates
    if (t >= 1 && curved_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      curved_5.tStart = t;  // (not accounting for frame time here)
      curved_5.frameNStart = frameN;  // exact frame index
      
      curved_5.setAutoDraw(true);
    }
    
    
    // *d* updates
    if (t >= 1 && d.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      d.tStart = t;  // (not accounting for frame time here)
      d.frameNStart = frameN;  // exact frame index
      
      d.setAutoDraw(true);
    }
    
    
    // *e* updates
    if (t >= 1 && e.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      e.tStart = t;  // (not accounting for frame time here)
      e.frameNStart = frameN;  // exact frame index
      
      e.setAutoDraw(true);
    }
    
    
    // *f* updates
    if (t >= 1 && f.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      f.tStart = t;  // (not accounting for frame time here)
      f.frameNStart = frameN;  // exact frame index
      
      f.setAutoDraw(true);
    }
    
    
    // *flat_o* updates
    if (t >= 1 && flat_o.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      flat_o.tStart = t;  // (not accounting for frame time here)
      flat_o.frameNStart = frameN;  // exact frame index
      
      flat_o.setAutoDraw(true);
    }
    
    
    // *g* updates
    if (t >= 1 && g.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      g.tStart = t;  // (not accounting for frame time here)
      g.frameNStart = frameN;  // exact frame index
      
      g.setAutoDraw(true);
    }
    
    
    // *i* updates
    if (t >= 1 && i.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      i.tStart = t;  // (not accounting for frame time here)
      i.frameNStart = frameN;  // exact frame index
      
      i.setAutoDraw(true);
    }
    
    
    // *k* updates
    if (t >= 1 && k.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      k.tStart = t;  // (not accounting for frame time here)
      k.frameNStart = frameN;  // exact frame index
      
      k.setAutoDraw(true);
    }
    
    
    // *l_ulnar* updates
    if (t >= 1 && l_ulnar.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l_ulnar.tStart = t;  // (not accounting for frame time here)
      l_ulnar.frameNStart = frameN;  // exact frame index
      
      l_ulnar.setAutoDraw(true);
    }
    
    
    // *l* updates
    if (t >= 1 && l.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      l.tStart = t;  // (not accounting for frame time here)
      l.frameNStart = frameN;  // exact frame index
      
      l.setAutoDraw(true);
    }
    
    
    // *o* updates
    if (t >= 1 && o.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      o.tStart = t;  // (not accounting for frame time here)
      o.frameNStart = frameN;  // exact frame index
      
      o.setAutoDraw(true);
    }
    
    
    // *open_8* updates
    if (t >= 1 && open_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      open_8.tStart = t;  // (not accounting for frame time here)
      open_8.frameNStart = frameN;  // exact frame index
      
      open_8.setAutoDraw(true);
    }
    
    
    // *r* updates
    if (t >= 1 && r.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      r.tStart = t;  // (not accounting for frame time here)
      r.frameNStart = frameN;  // exact frame index
      
      r.setAutoDraw(true);
    }
    
    
    // *s* updates
    if (t >= 1 && s.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      s.tStart = t;  // (not accounting for frame time here)
      s.frameNStart = frameN;  // exact frame index
      
      s.setAutoDraw(true);
    }
    
    
    // *u_h* updates
    if (t >= 1 && u_h.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      u_h.tStart = t;  // (not accounting for frame time here)
      u_h.frameNStart = frameN;  // exact frame index
      
      u_h.setAutoDraw(true);
    }
    
    
    // *v* updates
    if (t >= 1 && v.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      v.tStart = t;  // (not accounting for frame time here)
      v.frameNStart = frameN;  // exact frame index
      
      v.setAutoDraw(true);
    }
    
    
    // *w* updates
    if (t >= 1 && w.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      w.tStart = t;  // (not accounting for frame time here)
      w.frameNStart = frameN;  // exact frame index
      
      w.setAutoDraw(true);
    }
    
    
    // *x* updates
    if (t >= 1 && x.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      x.tStart = t;  // (not accounting for frame time here)
      x.frameNStart = frameN;  // exact frame index
      
      x.setAutoDraw(true);
    }
    
    
    // *y* updates
    if (t >= 1 && y.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      y.tStart = t;  // (not accounting for frame time here)
      y.frameNStart = frameN;  // exact frame index
      
      y.setAutoDraw(true);
    }
    
    // *mouse_2* updates
    if (t >= 0.0 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse_2.tStart = t;  // (not accounting for frame time here)
      mouse_2.frameNStart = frameN;  // exact frame index
      
      mouse_2.status = PsychoJS.Status.STARTED;
      mouse_2.mouseClock.reset();
      prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
      }
    if (mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse_2.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse_2.clickableObjects = eval([One_ulnar, One, three, four, five, eight, ten, a, add_3, add_5, add_bent_5, b, bent_3, bent_l, bent_v, touch_x, c, curved_5, d, e, f, flat_o, g, i, k, l_ulnar, l, o, open_8, r, s, u_h, v, w, x, y])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse_2.clickableObjects)) {
              mouse_2.clickableObjects = [mouse_2.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse_2.clickableObjects) {
              if (obj.contains(mouse_2)) {
                  gotValidClick = true;
                  mouse_2.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse_2.clicked_name.push(null);
          }
          _mouseXYs = mouse_2.getPos();
          mouse_2.x.push(_mouseXYs[0]);
          mouse_2.y.push(_mouseXYs[1]);
          mouse_2.leftButton.push(_mouseButtons[0]);
          mouse_2.midButton.push(_mouseButtons[1]);
          mouse_2.rightButton.push(_mouseButtons[2]);
          mouse_2.time.push(mouse_2.mouseClock.getTime());
          if (gotValidClick === true) { // end routine on response
            continueRoutine = false;
          }
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    PracticeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PracticeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Practice' ---
    PracticeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Practice.stopped', globalClock.getTime());
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse_2.x', mouse_2.x);
    psychoJS.experiment.addData('mouse_2.y', mouse_2.y);
    psychoJS.experiment.addData('mouse_2.leftButton', mouse_2.leftButton);
    psychoJS.experiment.addData('mouse_2.midButton', mouse_2.midButton);
    psychoJS.experiment.addData('mouse_2.rightButton', mouse_2.rightButton);
    psychoJS.experiment.addData('mouse_2.time', mouse_2.time);
    psychoJS.experiment.addData('mouse_2.clicked_name', mouse_2.clicked_name);
    
    // the Routine "Practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var TrialsMaxDurationReached;
var TrialsMaxDuration;
var TrialsComponents;
function TrialsRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Trials' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    TrialsClock.reset();
    routineTimer.reset();
    TrialsMaxDurationReached = false;
    // update component parameters for each repeat
    HS_vids.setMovie(HS_VIDS);
    // setup some python lists for storing info about the mouse
    // current position of the mouse:
    mouse.x = [];
    mouse.y = [];
    mouse.leftButton = [];
    mouse.midButton = [];
    mouse.rightButton = [];
    mouse.time = [];
    mouse.clicked_name = [];
    gotValidClick = false; // until a click is received
    psychoJS.experiment.addData('Trials.started', globalClock.getTime());
    TrialsMaxDuration = null
    // keep track of which components have finished
    TrialsComponents = [];
    TrialsComponents.push(Black_Screen);
    TrialsComponents.push(Noisy_1);
    TrialsComponents.push(HS_vids);
    TrialsComponents.push(Noisy_2);
    TrialsComponents.push(one_ulnar);
    TrialsComponents.push(one);
    TrialsComponents.push(Three);
    TrialsComponents.push(Four);
    TrialsComponents.push(Five);
    TrialsComponents.push(Eight);
    TrialsComponents.push(Ten);
    TrialsComponents.push(A);
    TrialsComponents.push(ADD_3);
    TrialsComponents.push(ADD_5);
    TrialsComponents.push(ADD_5_BENT);
    TrialsComponents.push(B);
    TrialsComponents.push(BENT_3);
    TrialsComponents.push(BENT_L);
    TrialsComponents.push(BENT_V);
    TrialsComponents.push(Touch_x);
    TrialsComponents.push(C);
    TrialsComponents.push(Curved_5);
    TrialsComponents.push(D);
    TrialsComponents.push(E);
    TrialsComponents.push(F);
    TrialsComponents.push(Flat_O);
    TrialsComponents.push(G);
    TrialsComponents.push(I);
    TrialsComponents.push(K);
    TrialsComponents.push(L_ulnar);
    TrialsComponents.push(L);
    TrialsComponents.push(O);
    TrialsComponents.push(Open_8);
    TrialsComponents.push(R);
    TrialsComponents.push(S);
    TrialsComponents.push(U_H);
    TrialsComponents.push(V);
    TrialsComponents.push(W);
    TrialsComponents.push(X);
    TrialsComponents.push(Y);
    TrialsComponents.push(mouse);
    
    TrialsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function TrialsRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Trials' ---
    // get current time
    t = TrialsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Black_Screen* updates
    if (t >= 0.0 && Black_Screen.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Black_Screen.tStart = t;  // (not accounting for frame time here)
      Black_Screen.frameNStart = frameN;  // exact frame index
      
      Black_Screen.setAutoDraw(true);
      Black_Screen.play();
    }
    
    frameRemains = 0.0 + 4.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Black_Screen.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Black_Screen.setAutoDraw(false);
    }
    
    
    // *Noisy_1* updates
    if (t >= 4.5 && Noisy_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Noisy_1.tStart = t;  // (not accounting for frame time here)
      Noisy_1.frameNStart = frameN;  // exact frame index
      
      Noisy_1.setAutoDraw(true);
      Noisy_1.play();
    }
    
    frameRemains = 4.5 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Noisy_1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Noisy_1.setAutoDraw(false);
    }
    
    
    // *HS_vids* updates
    if (t >= 5.0 && HS_vids.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      HS_vids.tStart = t;  // (not accounting for frame time here)
      HS_vids.frameNStart = frameN;  // exact frame index
      
      HS_vids.setAutoDraw(true);
      HS_vids.play();
    }
    
    frameRemains = 5.0 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (HS_vids.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      HS_vids.setAutoDraw(false);
    }
    
    
    // *Noisy_2* updates
    if (t >= 6.0 && Noisy_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Noisy_2.tStart = t;  // (not accounting for frame time here)
      Noisy_2.frameNStart = frameN;  // exact frame index
      
      Noisy_2.setAutoDraw(true);
      Noisy_2.play();
    }
    
    frameRemains = 6.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Noisy_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Noisy_2.setAutoDraw(false);
    }
    
    
    // *one_ulnar* updates
    if (t >= 6.6 && one_ulnar.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      one_ulnar.tStart = t;  // (not accounting for frame time here)
      one_ulnar.frameNStart = frameN;  // exact frame index
      
      one_ulnar.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (one_ulnar.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      one_ulnar.setAutoDraw(false);
    }
    
    
    // *one* updates
    if (t >= 6.6 && one.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      one.tStart = t;  // (not accounting for frame time here)
      one.frameNStart = frameN;  // exact frame index
      
      one.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (one.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      one.setAutoDraw(false);
    }
    
    
    // *Three* updates
    if (t >= 6.6 && Three.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Three.tStart = t;  // (not accounting for frame time here)
      Three.frameNStart = frameN;  // exact frame index
      
      Three.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Three.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Three.setAutoDraw(false);
    }
    
    
    // *Four* updates
    if (t >= 6.6 && Four.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Four.tStart = t;  // (not accounting for frame time here)
      Four.frameNStart = frameN;  // exact frame index
      
      Four.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Four.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Four.setAutoDraw(false);
    }
    
    
    // *Five* updates
    if (t >= 6.6 && Five.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Five.tStart = t;  // (not accounting for frame time here)
      Five.frameNStart = frameN;  // exact frame index
      
      Five.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Five.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Five.setAutoDraw(false);
    }
    
    
    // *Eight* updates
    if (t >= 6.6 && Eight.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Eight.tStart = t;  // (not accounting for frame time here)
      Eight.frameNStart = frameN;  // exact frame index
      
      Eight.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Eight.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Eight.setAutoDraw(false);
    }
    
    
    // *Ten* updates
    if (t >= 6.6 && Ten.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Ten.tStart = t;  // (not accounting for frame time here)
      Ten.frameNStart = frameN;  // exact frame index
      
      Ten.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Ten.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Ten.setAutoDraw(false);
    }
    
    
    // *A* updates
    if (t >= 6.6 && A.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      A.tStart = t;  // (not accounting for frame time here)
      A.frameNStart = frameN;  // exact frame index
      
      A.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (A.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      A.setAutoDraw(false);
    }
    
    
    // *ADD_3* updates
    if (t >= 6.6 && ADD_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ADD_3.tStart = t;  // (not accounting for frame time here)
      ADD_3.frameNStart = frameN;  // exact frame index
      
      ADD_3.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (ADD_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ADD_3.setAutoDraw(false);
    }
    
    
    // *ADD_5* updates
    if (t >= 6.6 && ADD_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ADD_5.tStart = t;  // (not accounting for frame time here)
      ADD_5.frameNStart = frameN;  // exact frame index
      
      ADD_5.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (ADD_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ADD_5.setAutoDraw(false);
    }
    
    
    // *ADD_5_BENT* updates
    if (t >= 6.6 && ADD_5_BENT.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ADD_5_BENT.tStart = t;  // (not accounting for frame time here)
      ADD_5_BENT.frameNStart = frameN;  // exact frame index
      
      ADD_5_BENT.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (ADD_5_BENT.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      ADD_5_BENT.setAutoDraw(false);
    }
    
    
    // *B* updates
    if (t >= 6.6 && B.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      B.tStart = t;  // (not accounting for frame time here)
      B.frameNStart = frameN;  // exact frame index
      
      B.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (B.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      B.setAutoDraw(false);
    }
    
    
    // *BENT_3* updates
    if (t >= 6.6 && BENT_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BENT_3.tStart = t;  // (not accounting for frame time here)
      BENT_3.frameNStart = frameN;  // exact frame index
      
      BENT_3.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (BENT_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      BENT_3.setAutoDraw(false);
    }
    
    
    // *BENT_L* updates
    if (t >= 6.6 && BENT_L.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BENT_L.tStart = t;  // (not accounting for frame time here)
      BENT_L.frameNStart = frameN;  // exact frame index
      
      BENT_L.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (BENT_L.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      BENT_L.setAutoDraw(false);
    }
    
    
    // *BENT_V* updates
    if (t >= 6.6 && BENT_V.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BENT_V.tStart = t;  // (not accounting for frame time here)
      BENT_V.frameNStart = frameN;  // exact frame index
      
      BENT_V.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (BENT_V.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      BENT_V.setAutoDraw(false);
    }
    
    
    // *Touch_x* updates
    if (t >= 6.6 && Touch_x.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Touch_x.tStart = t;  // (not accounting for frame time here)
      Touch_x.frameNStart = frameN;  // exact frame index
      
      Touch_x.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Touch_x.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Touch_x.setAutoDraw(false);
    }
    
    
    // *C* updates
    if (t >= 6.6 && C.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      C.tStart = t;  // (not accounting for frame time here)
      C.frameNStart = frameN;  // exact frame index
      
      C.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (C.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      C.setAutoDraw(false);
    }
    
    
    // *Curved_5* updates
    if (t >= 6.6 && Curved_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Curved_5.tStart = t;  // (not accounting for frame time here)
      Curved_5.frameNStart = frameN;  // exact frame index
      
      Curved_5.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Curved_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Curved_5.setAutoDraw(false);
    }
    
    
    // *D* updates
    if (t >= 6.6 && D.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      D.tStart = t;  // (not accounting for frame time here)
      D.frameNStart = frameN;  // exact frame index
      
      D.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (D.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      D.setAutoDraw(false);
    }
    
    
    // *E* updates
    if (t >= 6.6 && E.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      E.tStart = t;  // (not accounting for frame time here)
      E.frameNStart = frameN;  // exact frame index
      
      E.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (E.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      E.setAutoDraw(false);
    }
    
    
    // *F* updates
    if (t >= 6.6 && F.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      F.tStart = t;  // (not accounting for frame time here)
      F.frameNStart = frameN;  // exact frame index
      
      F.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (F.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      F.setAutoDraw(false);
    }
    
    
    // *Flat_O* updates
    if (t >= 6.6 && Flat_O.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Flat_O.tStart = t;  // (not accounting for frame time here)
      Flat_O.frameNStart = frameN;  // exact frame index
      
      Flat_O.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Flat_O.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Flat_O.setAutoDraw(false);
    }
    
    
    // *G* updates
    if (t >= 6.6 && G.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      G.tStart = t;  // (not accounting for frame time here)
      G.frameNStart = frameN;  // exact frame index
      
      G.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (G.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      G.setAutoDraw(false);
    }
    
    
    // *I* updates
    if (t >= 6.6 && I.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      I.tStart = t;  // (not accounting for frame time here)
      I.frameNStart = frameN;  // exact frame index
      
      I.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (I.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      I.setAutoDraw(false);
    }
    
    
    // *K* updates
    if (t >= 6.6 && K.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      K.tStart = t;  // (not accounting for frame time here)
      K.frameNStart = frameN;  // exact frame index
      
      K.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (K.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      K.setAutoDraw(false);
    }
    
    
    // *L_ulnar* updates
    if (t >= 6.6 && L_ulnar.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      L_ulnar.tStart = t;  // (not accounting for frame time here)
      L_ulnar.frameNStart = frameN;  // exact frame index
      
      L_ulnar.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (L_ulnar.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      L_ulnar.setAutoDraw(false);
    }
    
    
    // *L* updates
    if (t >= 6.6 && L.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      L.tStart = t;  // (not accounting for frame time here)
      L.frameNStart = frameN;  // exact frame index
      
      L.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (L.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      L.setAutoDraw(false);
    }
    
    
    // *O* updates
    if (t >= 6.6 && O.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O.tStart = t;  // (not accounting for frame time here)
      O.frameNStart = frameN;  // exact frame index
      
      O.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (O.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O.setAutoDraw(false);
    }
    
    
    // *Open_8* updates
    if (t >= 6.6 && Open_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Open_8.tStart = t;  // (not accounting for frame time here)
      Open_8.frameNStart = frameN;  // exact frame index
      
      Open_8.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Open_8.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Open_8.setAutoDraw(false);
    }
    
    
    // *R* updates
    if (t >= 6.6 && R.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      R.tStart = t;  // (not accounting for frame time here)
      R.frameNStart = frameN;  // exact frame index
      
      R.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (R.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      R.setAutoDraw(false);
    }
    
    
    // *S* updates
    if (t >= 6.6 && S.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      S.tStart = t;  // (not accounting for frame time here)
      S.frameNStart = frameN;  // exact frame index
      
      S.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (S.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      S.setAutoDraw(false);
    }
    
    
    // *U_H* updates
    if (t >= 6.6 && U_H.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      U_H.tStart = t;  // (not accounting for frame time here)
      U_H.frameNStart = frameN;  // exact frame index
      
      U_H.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (U_H.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      U_H.setAutoDraw(false);
    }
    
    
    // *V* updates
    if (t >= 6.6 && V.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      V.tStart = t;  // (not accounting for frame time here)
      V.frameNStart = frameN;  // exact frame index
      
      V.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (V.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      V.setAutoDraw(false);
    }
    
    
    // *W* updates
    if (t >= 6.6 && W.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      W.tStart = t;  // (not accounting for frame time here)
      W.frameNStart = frameN;  // exact frame index
      
      W.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (W.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      W.setAutoDraw(false);
    }
    
    
    // *X* updates
    if (t >= 6.6 && X.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      X.tStart = t;  // (not accounting for frame time here)
      X.frameNStart = frameN;  // exact frame index
      
      X.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (X.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      X.setAutoDraw(false);
    }
    
    
    // *Y* updates
    if (t >= 6.6 && Y.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Y.tStart = t;  // (not accounting for frame time here)
      Y.frameNStart = frameN;  // exact frame index
      
      Y.setAutoDraw(true);
    }
    
    frameRemains = 6.6 + 5 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Y.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Y.setAutoDraw(false);
    }
    
    // *mouse* updates
    if (t >= 0.0 && mouse.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      mouse.tStart = t;  // (not accounting for frame time here)
      mouse.frameNStart = frameN;  // exact frame index
      
      mouse.status = PsychoJS.Status.STARTED;
      mouse.mouseClock.reset();
      prevButtonState = [0, 0, 0];  // if now button is down we will treat as 'new' click
      }
    if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
      _mouseButtons = mouse.getPressed();
      if (!_mouseButtons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
        prevButtonState = _mouseButtons;
        if (_mouseButtons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
          // check if the mouse was inside our 'clickable' objects
          gotValidClick = false;
          mouse.clickableObjects = eval([one_ulnar, one, Three, Four, Five, Eight, Ten, A, ADD_3, ADD_5, ADD_5_BENT, B, BENT_3, BENT_L, BENT_V, Touch_x, C, Curved_5, D, E, F, Flat_O, G, I, K, L_ulnar, L, O, Open_8, R, S, U_H, V, W, X, Y])
          ;// make sure the mouse's clickable objects are an array
          if (!Array.isArray(mouse.clickableObjects)) {
              mouse.clickableObjects = [mouse.clickableObjects];
          }
          // iterate through clickable objects and check each
          for (const obj of mouse.clickableObjects) {
              if (obj.contains(mouse)) {
                  gotValidClick = true;
                  mouse.clicked_name.push(obj.name);
              }
          }
          if (!gotValidClick) {
              mouse.clicked_name.push(null);
          }
          _mouseXYs = mouse.getPos();
          mouse.x.push(_mouseXYs[0]);
          mouse.y.push(_mouseXYs[1]);
          mouse.leftButton.push(_mouseButtons[0]);
          mouse.midButton.push(_mouseButtons[1]);
          mouse.rightButton.push(_mouseButtons[2]);
          mouse.time.push(mouse.mouseClock.getTime());
          // end routine on response
          continueRoutine = false;
        }
      }
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    TrialsComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function TrialsRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Trials' ---
    TrialsComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Trials.stopped', globalClock.getTime());
    Black_Screen.stop();  // ensure movie has stopped at end of Routine
    Noisy_1.stop();  // ensure movie has stopped at end of Routine
    HS_vids.stop();  // ensure movie has stopped at end of Routine
    Noisy_2.stop();  // ensure movie has stopped at end of Routine
    // store data for psychoJS.experiment (ExperimentHandler)
    psychoJS.experiment.addData('mouse.x', mouse.x);
    psychoJS.experiment.addData('mouse.y', mouse.y);
    psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton);
    psychoJS.experiment.addData('mouse.midButton', mouse.midButton);
    psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton);
    psychoJS.experiment.addData('mouse.time', mouse.time);
    psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name);
    
    // the Routine "Trials" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var BreakMaxDurationReached;
var _GO_allKeys;
var BreakMaxDuration;
var BreakComponents;
function BreakRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Break' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    BreakClock.reset();
    routineTimer.reset();
    BreakMaxDurationReached = false;
    // update component parameters for each repeat
    GO.keys = undefined;
    GO.rt = undefined;
    _GO_allKeys = [];
    psychoJS.experiment.addData('Break.started', globalClock.getTime());
    BreakMaxDuration = null
    // keep track of which components have finished
    BreakComponents = [];
    BreakComponents.push(Blank);
    BreakComponents.push(Continue);
    BreakComponents.push(GO);
    
    BreakComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function BreakRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Break' ---
    // get current time
    t = BreakClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Blank* updates
    if (t >= 0 && Blank.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Blank.tStart = t;  // (not accounting for frame time here)
      Blank.frameNStart = frameN;  // exact frame index
      
      Blank.setAutoDraw(true);
      Blank.play();
    }
    
    frameRemains = 0 + 300 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Blank.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Blank.setAutoDraw(false);
    }
    
    
    // *Continue* updates
    if (t >= 301 && Continue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Continue.tStart = t;  // (not accounting for frame time here)
      Continue.frameNStart = frameN;  // exact frame index
      
      Continue.setAutoDraw(true);
    }
    
    
    // *GO* updates
    if (t >= 301 && GO.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      GO.tStart = t;  // (not accounting for frame time here)
      GO.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { GO.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { GO.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { GO.clearEvents(); });
    }
    
    if (GO.status === PsychoJS.Status.STARTED) {
      let theseKeys = GO.getKeys({keyList: ['space'], waitRelease: false});
      _GO_allKeys = _GO_allKeys.concat(theseKeys);
      if (_GO_allKeys.length > 0) {
        GO.keys = _GO_allKeys[_GO_allKeys.length - 1].name;  // just the last key pressed
        GO.rt = _GO_allKeys[_GO_allKeys.length - 1].rt;
        GO.duration = _GO_allKeys[_GO_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    BreakComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function BreakRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Break' ---
    BreakComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Break.stopped', globalClock.getTime());
    Blank.stop();  // ensure movie has stopped at end of Routine
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(GO.corr, level);
    }
    psychoJS.experiment.addData('GO.keys', GO.keys);
    if (typeof GO.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('GO.rt', GO.rt);
        psychoJS.experiment.addData('GO.duration', GO.duration);
        routineTimer.reset();
        }
    
    GO.stop();
    // the Routine "Break" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var Break_2MaxDurationReached;
var _GO_2_allKeys;
var Break_2MaxDuration;
var Break_2Components;
function Break_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Break_2' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    Break_2Clock.reset();
    routineTimer.reset();
    Break_2MaxDurationReached = false;
    // update component parameters for each repeat
    GO_2.keys = undefined;
    GO_2.rt = undefined;
    _GO_2_allKeys = [];
    psychoJS.experiment.addData('Break_2.started', globalClock.getTime());
    Break_2MaxDuration = null
    // keep track of which components have finished
    Break_2Components = [];
    Break_2Components.push(Blank_2);
    Break_2Components.push(Continue_2);
    Break_2Components.push(GO_2);
    
    Break_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Break_2RoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Break_2' ---
    // get current time
    t = Break_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Blank_2* updates
    if (t >= 0.0 && Blank_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Blank_2.tStart = t;  // (not accounting for frame time here)
      Blank_2.frameNStart = frameN;  // exact frame index
      
      Blank_2.setAutoDraw(true);
      Blank_2.play();
    }
    
    frameRemains = 0.0 + 600 - psychoJS.window.monitorFramePeriod * 0.75;// most of one frame period left
    if (Blank_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Blank_2.setAutoDraw(false);
    }
    
    
    // *Continue_2* updates
    if (t >= 601 && Continue_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Continue_2.tStart = t;  // (not accounting for frame time here)
      Continue_2.frameNStart = frameN;  // exact frame index
      
      Continue_2.setAutoDraw(true);
    }
    
    
    // *GO_2* updates
    if (t >= 601 && GO_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      GO_2.tStart = t;  // (not accounting for frame time here)
      GO_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { GO_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { GO_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { GO_2.clearEvents(); });
    }
    
    if (GO_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = GO_2.getKeys({keyList: ['space'], waitRelease: false});
      _GO_2_allKeys = _GO_2_allKeys.concat(theseKeys);
      if (_GO_2_allKeys.length > 0) {
        GO_2.keys = _GO_2_allKeys[_GO_2_allKeys.length - 1].name;  // just the last key pressed
        GO_2.rt = _GO_2_allKeys[_GO_2_allKeys.length - 1].rt;
        GO_2.duration = _GO_2_allKeys[_GO_2_allKeys.length - 1].duration;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Break_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Break_2RoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Break_2' ---
    Break_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Break_2.stopped', globalClock.getTime());
    Blank_2.stop();  // ensure movie has stopped at end of Routine
    // update the trial handler
    if (currentLoop instanceof MultiStairHandler) {
      currentLoop.addResponse(GO_2.corr, level);
    }
    psychoJS.experiment.addData('GO_2.keys', GO_2.keys);
    if (typeof GO_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('GO_2.rt', GO_2.rt);
        psychoJS.experiment.addData('GO_2.duration', GO_2.duration);
        routineTimer.reset();
        }
    
    GO_2.stop();
    // the Routine "Break_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


var GoodbyeMaxDurationReached;
var GoodbyeMaxDuration;
var GoodbyeComponents;
function GoodbyeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //--- Prepare to start Routine 'Goodbye' ---
    t = 0;
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    GoodbyeClock.reset();
    routineTimer.reset();
    GoodbyeMaxDurationReached = false;
    // update component parameters for each repeat
    //Dsiable downloading results to browser
    psychoJS._saveResults = 0;
    
    //Save data to filename
    let filename = psychoJS._experiment._experimentName + '_' + psychoJS._experiment._datetime + '.csv';
    
    //Extract data from experiment
    let dataObj = psychoJS._experiment._trialsData;
    
    //Convert data to csv 
    let data = [Object.keys(dataObj[0])].concat(dataObj).map(it => {
        return Object.values(it).toString()
    }).join('\n')
    
    //Send data tp OSF via datapipe
    console.log('Saving data...');
    fetch('save.py', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: '*/*',
        },
        body: JSON.stringify({ 
            experimentID:'lyuTF7dpXmKO'
            filename: filename,
            data: data,
        }),
    }).then(response => response.json()).then(data => {
        // log response and force experiment end
        console.log(data);
        quitPsychoJS();
    })
    psychoJS.experiment.addData('Goodbye.started', globalClock.getTime());
    GoodbyeMaxDuration = null
    // keep track of which components have finished
    GoodbyeComponents = [];
    GoodbyeComponents.push(ExitText);
    
    GoodbyeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function GoodbyeRoutineEachFrame() {
  return async function () {
    //--- Loop for each frame of Routine 'Goodbye' ---
    // get current time
    t = GoodbyeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ExitText* updates
    if (t >= 0.0 && ExitText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ExitText.tStart = t;  // (not accounting for frame time here)
      ExitText.frameNStart = frameN;  // exact frame index
      
      ExitText.setAutoDraw(true);
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    GoodbyeComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function GoodbyeRoutineEnd(snapshot) {
  return async function () {
    //--- Ending Routine 'Goodbye' ---
    GoodbyeComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('Goodbye.stopped', globalClock.getTime());
    // the Routine "Goodbye" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    // Routines running outside a loop should always advance the datafile row
    if (currentLoop === psychoJS.experiment) {
      psychoJS.experiment.nextEntry(snapshot);
    }
    return Scheduler.Event.NEXT;
  }
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
