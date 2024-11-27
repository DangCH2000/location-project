import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { LocationService } from './location.service';
import { Location } from './location.entity';

@Controller('locations')
export class LocationController {
  constructor(private readonly locationService: LocationService) {}

  @Get()
  findAll(): Promise<Location[]> {
    return this.locationService.findAll();
  }

  @Post()
  create(@Body() location: Partial<Location>): Promise<Location> {
    return this.locationService.create(location);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateData: Partial<Location>,
  ): Promise<Location> {
    return this.locationService.update(id, updateData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.locationService.delete(id);
  }
}
