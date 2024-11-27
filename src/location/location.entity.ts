import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('locations')
export class Location {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  code: string;

  @Column({ type: 'float' })
  area: number;

  // Quan hệ với parent
  @ManyToOne(() => Location, (location) => location.children, {
    nullable: true,
  })
  parent: Location;

  @Column({ nullable: true })
  parentId: string;

  // Quan hệ với các children
  @OneToMany(() => Location, (location) => location.parent)
  children: Location[];
}
