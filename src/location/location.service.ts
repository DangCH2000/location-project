import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './location.entity';

@Injectable()
export class LocationService {
  constructor(
    @InjectRepository(Location)
    private locationRepository: Repository<Location>,
  ) {}

  // Get all locations
  findAll(): Promise<Location[]> {
    return this.locationRepository.find({ relations: ['parent'] });
  }

  // Create new location
  create(location: Partial<Location>): Promise<Location> {
    const newLocation = this.locationRepository.create(location);
    return this.locationRepository.save(newLocation);
  }

  // Update location
  async update(id: string, updateData: Partial<Location>): Promise<Location> {
    await this.locationRepository.update(id, updateData);
    return this.locationRepository.findOne({ where: { id } });
  }

  // Delete location
  delete(id: string): Promise<void> {
    return this.locationRepository.delete(id).then(() => null);
  }
}
