import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { PG_CONNECTION } from 'src/shared/constants';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(@Inject(PG_CONNECTION) private pg: any) {}
  async create(createTodoDto: CreateTodoDto): Promise<any> {
    const { title, text, category_id } = createTodoDto;
    const {
      rows: [row],
    } = await this.pg.query(
      'insert into todos(todo_title, todo_text ,category_id) values($1 , $2 , $3) returning *',
      [title, text, category_id],
    );

    return { message: 'Success created!', row };
  }

  async findAll() {
    const { rows } = await this.pg.query('select * from todos');
    return rows;
  }

  async findOne(id: string) {
    const {
      rows: [row],
    } = await this.pg.query('select * from todos where todo_id = $1', [id]);
    return row;
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    const { title, text, category_id } = updateTodoDto;
    const {
      rows: [data],
    } = await this.pg.query(
      'update todos set todo_title = $1, todo_text=$2,category_id = $3 where todo_id = $4 returning *',
      [title, text, category_id, id],
    );

    if(!data) throw new NotFoundException('Not found');

    return data;
  }

  remove(id: string) {
    this.pg.query('delete from todos where todo_id = $1', [id]);
  
    return {messsage: 'Success'};
  }
}
