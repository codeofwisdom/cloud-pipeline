/*
 * Copyright 2017-2019 EPAM Systems, Inc. (https://www.epam.com/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.epam.pipeline.notifier.repository;

import com.epam.pipeline.entity.user.PipelineUser;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

/**
 * {@link NotificationRepository} provides methods to load {@link PipelineUser} from database.
 */
public interface UserRepository extends JpaRepository<PipelineUser, Long> {

    /**
     * Loads list of {@link PipelineUser} by provided ids
     * @param ids   list of ids of {@link PipelineUser} to be loaded
     * @return list of {@link PipelineUser}
     */
    List<PipelineUser> findByIdIn(List<Long> ids);
}
