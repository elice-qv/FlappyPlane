import { _decorator, Component, director, RigidBody2D } from 'cc'
import { GameManager } from './GameManagerScript'
const { ccclass, property } = _decorator;

@ccclass('EndGameScript')
export class EndGameScript extends Component {
    start() {

    }

    private restartGame(){
        let gameManager = director.getScene().getChildByName("GameManager").getComponent(GameManager)

        gameManager.EndGameScreen.active = false

        gameManager.player.getComponent(RigidBody2D).sleep()
        gameManager.player.setPosition(-120, 0)
        gameManager.player.setRotationFromEuler(0, 0, 0)

        gameManager.score = 0
        gameManager.scoreLabel.string = "Счет: 0 "

        gameManager.isGameStarted = false

        director.getScene().getChildByName("Canvas").children.forEach(value => {
            if (value.name === "TopObstacle"  || value.name === "Sensor" || value.name === "BottomObstacle") {
                value .destroy()
            }
        })

    }

    private mainMenu(){
        director.loadScene("MenuScene")
    }

    update(deltaTime: number) {
        
    }
}

