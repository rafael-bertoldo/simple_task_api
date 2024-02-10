import {createTaskService} from '../services/task.service'

async function seed() {
  for(let i = 0; i <= 50; i++) {
    const data = {content: `Tarefa teste ${i}`}
    await createTaskService(data)
  }
}

seed()