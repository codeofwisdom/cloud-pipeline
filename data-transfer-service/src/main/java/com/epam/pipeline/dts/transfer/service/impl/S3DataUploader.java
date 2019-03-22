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

package com.epam.pipeline.dts.transfer.service.impl;

import com.epam.pipeline.dts.transfer.model.StorageType;
import com.epam.pipeline.dts.transfer.service.PipelineCliProvider;

public class S3DataUploader extends AbstractPipeCliDataUploader {

    private static final String S3_PREFIX = "s3://";

    public S3DataUploader(final PipelineCliProvider pipelineCliProvider) {
        super(pipelineCliProvider);
    }

    @Override
    public StorageType getStorageType() {
        return StorageType.S3;
    }

    @Override
    public String getFilesPathPrefix() {
        return S3_PREFIX;
    }

}
